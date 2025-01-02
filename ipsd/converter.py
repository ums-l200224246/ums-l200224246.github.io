# Mengonversi file teks ke format CSV dan mengekstraknya ke dalam file tar
import re
import csv 
import tarfile
from collections import defaultdict

# Membaca kembali file teks
with open("chat.txt", 'r', encoding='utf-8') as file:
    lines = file.readlines()

group_comments = defaultdict(list)
current_group = None

for line in lines:
    # Deteksi pembuatan grup baru
    group_match = re.search(r'membuat grup "(.*?)"', line)
    if group_match:
        current_group = group_match.group(1)
    
    # Menyimpan komentar ke grup saat ini
    if current_group and re.search(r':', line):
        group_comments[current_group].append(line)

# Menentukan grup dengan komentar terbanyak
most_active_group = max(group_comments, key=lambda x: len(group_comments[x]))
most_active_comments = group_comments[most_active_group]

print(most_active_group)

# Menyimpan dalam format CSV
csv_file = "data_group.csv"
with open(csv_file, 'w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerow(["Timestamp", "Sender", "Message"])
    
    for line in lines:
        match = re.match(r'^(.*?) - (.*?): (.*)', line)
        if match:
            timestamp, sender, message = match.groups()
            writer.writerow([timestamp, sender, message])

tar_file = "data_group.tar"
with tarfile.open(tar_file, "w") as tar:
    tar.add(csv_file, arcname="data_group.csv")

