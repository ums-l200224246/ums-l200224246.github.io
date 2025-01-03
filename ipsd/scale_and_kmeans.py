from metaflow import FlowSpec, step, Parameter
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
import os
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import re

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('punkt_tab')

class ManyKmeansFlow(FlowSpec):
    # Parameter definitions
    input_file = Parameter(
        name='input_file',
        default='data_group.xlsx',
        help='Path to input XLSX file'
    )
    
    output_file = Parameter(
        name='output_file',
        default='output.xlsx',
        help='Path to output XLSX file'
    )
    
    n_clusters_list = Parameter(
        name='n_clusters_list',
        default=[3, 4, 5],
        help='List of cluster counts'
    )

    def preprocess_text(self, text):
        """
        Preprocessing text bahasa Indonesia dengan NLTK stopwords
        """
        if not isinstance(text, str):
            return ""
        
        # Konversi ke lowercase
        text = text.lower()
        
        # Hapus URL
        text = re.sub(r'http\S+|www\S+|https\S+', '', text, flags=re.MULTILINE)
        
        # Hapus tanda baca dan angka
        text = re.sub(r'[^\w\s]', '', text)
        text = re.sub(r'\d+', '', text)
        
        # Tokenisasi
        tokens = word_tokenize(text)
        
        # Hapus stopwords
        stop_words = set(stopwords.words('indonesian'))
        tokens = [word for word in tokens if word not in stop_words]
        
        # Gabung kembali tokens menjadi string
        return ' '.join(tokens)

    @step
    def start(self):
        """
        Start step: Read data and preprocess text.
        """
        try:
            # Download NLTK data yang diperlukan
            try:
                nltk.data.find('tokenizers/punkt')
                nltk.data.find('corpora/stopwords')
            except LookupError:
                nltk.download('punkt')
                nltk.download('stopwords')

            # Baca data
            self.data = pd.read_excel(self.input_file)
            if 'message' not in self.data.columns:
                raise ValueError("The input file must have a 'message' column.")
            
            # Preprocess pesan
            self.data['processed_message'] = self.data['message'].fillna("").apply(self.preprocess_text)
            
            # Tampilkan contoh preprocessing
            print("\nContoh hasil preprocessing:")
            sample_idx = min(5, len(self.data))
            for i in range(sample_idx):
                print(f"\nOriginal: {self.data['message'].iloc[i][:100]}...")
                print(f"Processed: {self.data['processed_message'].iloc[i][:100]}...")
            
            print(f"\nData read successfully with {len(self.data)} rows and {len(self.data.columns)} columns.")
        except Exception as e:
            print(f"Error in start step: {str(e)}")
            raise
        
        self.next(self.vectorize)
    
    @step
    def vectorize(self):
        """
        Vectorize teks menggunakan TF-IDF.
        """
        try:
            vectorizer = TfidfVectorizer(
                min_df=2,  # Ignore terms that appear in less than 2 documents
                max_df=0.95,  # Ignore terms that appear in more than 95% of documents
                ngram_range=(1, 2)  # Include both unigrams and bigrams
            )
            
            self.vectorized_data = vectorizer.fit_transform(self.data['processed_message'])
            self.feature_names = vectorizer.get_feature_names_out()
            print(f"Vectorized data shape: {self.vectorized_data.shape}")
        except Exception as e:
            print(f"Error in vectorize step: {str(e)}")
            raise
        
        self.next(self.cluster)
    
    @step
    def cluster(self):
        """
        Perform clustering and extract representative terms.
        """
        try:
            self.top = {}
            self.cluster_stats = {}
            
            for n_clusters in self.n_clusters_list:
                kmeans = KMeans(
                    n_clusters=int(n_clusters),
                    random_state=42,
                    n_init=10
                )
                cluster_labels = kmeans.fit_predict(self.vectorized_data)
                self.data[f'cluster_{n_clusters}'] = cluster_labels
                print(f"\nClustering completed with {n_clusters} clusters.")
                
                # Extract top words and calculate statistics
                cluster_centers = kmeans.cluster_centers_
                cluster_sizes = pd.Series(cluster_labels).value_counts()
                
                self.top[n_clusters] = []
                self.cluster_stats[n_clusters] = []
                
                print(f"\nAnalisis cluster untuk k={n_clusters}:")
                for i in range(n_clusters):
                    # Get top words
                    top_indices = cluster_centers[i].argsort()[-5:][::-1]
                    top_words = [self.feature_names[idx] for idx in top_indices]
                    self.top[n_clusters].append(top_words)
                    
                    # Calculate cluster statistics
                    size = cluster_sizes[i]
                    percentage = (size / len(self.data) * 100).round(2)
                    self.cluster_stats[n_clusters].append({
                        'size': size,
                        'percentage': percentage
                    })
                    
                    print(f"\nCluster {i}:")
                    print(f"- Ukuran: {size} dokumen ({percentage}%)")
                    print(f"- Kata-kata utama: {', '.join(top_words)}")
        except Exception as e:
            print(f"Error in cluster step: {str(e)}")
            raise
        
        self.next(self.save_results)
    
    @step
    def save_results(self):
        """
        Save results to Excel files.
        """
        try:
            # Save main clustered data
            self.data.to_excel(self.output_file, index=False)
            print(f"\nClustered data saved to '{self.output_file}'")
            
            # Save detailed analysis
            analysis_file = os.path.splitext(self.output_file)[0] + '_analysis.xlsx'
            analysis_data = []
            
            for n_clusters, clusters_words in self.top.items():
                for cluster_idx, words in enumerate(clusters_words):
                    stats = self.cluster_stats[n_clusters][cluster_idx]
                    analysis_data.append({
                        'jumlah_cluster': n_clusters,
                        'cluster': cluster_idx,
                        'ukuran_cluster': stats['size'],
                        'persentase_cluster': stats['percentage'],
                        'kata_utama': ', '.join(words)
                    })
            
            pd.DataFrame(analysis_data).to_excel(analysis_file, index=False)
            print(f"Detailed analysis saved to '{analysis_file}'")
        except Exception as e:
            print(f"Error in save_results step: {str(e)}")
            raise
        
        self.next(self.end)

    @step
    def end(self):
        """
        End step: Workflow is complete.
        """
        print("\nWorkflow completed successfully.")
        print("Files yang dihasilkan:")
        print(f"1. Data hasil clustering: {self.output_file}")
        print(f"2. Analisis detail cluster: {os.path.splitext(self.output_file)[0]}_analysis.xlsx")

if __name__ == '__main__':
    ManyKmeansFlow()