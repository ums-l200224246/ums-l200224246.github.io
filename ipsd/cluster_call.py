from metaflow import Flow

# Mengambil hasil dari workflow terakhir
run = Flow('ManyKmeansFlow').latest_run

# Mengambil hasil clustering untuk 3, 4, dan 5 cluster
k3 = run.data.top[3]
k4 = run.data.top[4]
k5 = run.data.top[5]

# Menampilkan 3 kata teratas untuk setiap cluster
print("Top words for 3 clusters:")
print(k3[0][:3])  # Cluster pertama
print(k3[1][:3])  # Cluster kedua
print(k3[2][:3])  # Cluster ketiga

print("\nTop words for 4 clusters:")
print(k4[0][:3])  # Cluster pertama
print(k4[1][:3])  # Cluster kedua
print(k4[2][:3])  # Cluster ketiga
print(k4[3][:3])  # Cluster keempat

print("\nTop words for 5 clusters:")
for i in range(5):
    print(f"Cluster {i}: {k5[i][:3]}")
