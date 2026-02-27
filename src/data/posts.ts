import { BlogPost } from '../types';

// TODO: Edit/tambah blog post kamu sendiri di sini. Konten saat ini adalah contoh yang bisa kamu ubah.
export const SAMPLE_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Perjalanan Saya di Dunia AI & Prompt Engineering',
    description: 'Bagaimana saya mulai tertarik dengan AI dan bagaimana prompt engineering mengubah cara saya belajar dan bekerja.',
    date: '2025-01-15',
    readTime: '5 min read',
    content: `Awal mula perkenalan saya dengan AI dimulai saat semester 3, ketika pertama kali mencoba ChatGPT. Dari situ, saya menyadari bahwa kemampuan berkomunikasi dengan AI — yang dikenal sebagai Prompt Engineering — adalah skill yang sangat powerful.

Saya mulai bereksperimen dengan berbagai AI model, mulai dari GPT, Gemini, hingga Claude. Setiap model punya keunikan tersendiri dalam memahami konteks dan menghasilkan output.

Yang paling menarik adalah ketika saya mulai menggunakan AI untuk membantu proses development. Dari menulis boilerplate code, debugging, hingga brainstorming arsitektur sistem — AI menjadi partner coding yang sangat membantu.

Ke depannya, saya berencana untuk lebih mendalami bidang AI, khususnya dalam penerapan machine learning untuk solusi real-world problems.`
  },
  {
    id: 2,
    title: 'Membangun Portfolio Website dengan React & TypeScript',
    description: 'Panduan lengkap membuat website portfolio modern menggunakan React, TypeScript, Vite, dan TailwindCSS.',
    date: '2025-01-10',
    readTime: '8 min read',
    content: `Portfolio website adalah salah satu aset paling penting bagi seorang developer. Ini adalah tempat di mana kamu bisa menunjukkan skill, project, dan personality kamu kepada dunia.

Dalam membangun portfolio ini, saya menggunakan stack modern:
• React 18 dengan TypeScript untuk type safety
• Vite sebagai build tool yang super cepat
• TailwindCSS untuk styling yang konsisten
• React Router untuk navigasi SPA
• GitHub Pages untuk hosting gratis

Tips membuat portfolio yang standout:
1. Gunakan dark mode — menunjukkan perhatian terhadap UX
2. Tampilkan project nyata, bukan template
3. Tulis bio yang authentic dan personal
4. Pastikan responsive di semua device
5. Tambahkan animasi subtle untuk kesan premium`
  },
  {
    id: 3,
    title: 'Data Science dengan Python untuk Pemula',
    description: 'Pengalaman saya belajar data science menggunakan Python, pandas, dan scikit-learn untuk analisis clustering.',
    date: '2025-01-05',
    readTime: '6 min read',
    content: `Salah satu mata kuliah yang paling berkesan bagi saya adalah IPSD (Pengantar Sains Data), di mana saya belajar mengolah data menggunakan Python.

Tools utama yang saya gunakan:
• Python sebagai bahasa utama
• Pandas untuk manipulasi data
• Scikit-learn untuk algoritma machine learning
• Matplotlib untuk visualisasi

Project yang paling menarik adalah implementasi K-Means Clustering untuk mengelompokkan data. Proses dari data mentah hingga insight yang bermakna benar-benar membuka mata saya tentang kekuatan data science.

Pelajaran terpenting: Data cleaning memakan 80% waktu, tapi itu adalah fondasi dari analisis yang akurat.`
  },
];