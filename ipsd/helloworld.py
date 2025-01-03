## Tugas Sebelum UTS membuat metaflow alur pekuliahan informatika

from metaflow import FlowSpec, step

class InformatikaKuliahFlow(FlowSpec):

    @step
    def start(self):
        """
        Mulai proses alur kuliah informatika.
        """
        print("Memulai proses mengikuti kuliah informatika.")
        self.next(self.bayar_spp)

    @step
    def bayar_spp(self):
        """
        Langkah pertama: Membayar SPP
        """
        self.spp_terbayar = True
        print("SPP berhasil dibayarkan.")
        self.next(self.konfirmasi_spp)

    @step
    def konfirmasi_spp(self):
        """
        Langkah kedua: Konfirmasi pembayaran SPP dan Aktivasi akun mahasiswa
        """
        if self.spp_terbayar:
            self.spp_dikonfirmasi = True
            print("Pembayaran SPP terkonfirmasi. Akun mahasiswa aktif.")
        else:
            self.spp_dikonfirmasi = False
            print("Gagal konfirmasi SPP. Proses berhenti.")
        self.next(self.mengikuti_perkuliahan)

    @step
    def mengikuti_perkuliahan(self):
        """
        Langkah ketiga: Mengikuti perkuliahan.
        """
        if self.spp_dikonfirmasi:
            print("Mahasiswa mengikuti perkuliahan sesuai jadwal.")
            self.perkuliahan_selesai = True
        else:
            print("Tidak dapat mengikuti perkuliahan karena SPP tidak terkonfirmasi.")
            self.perkuliahan_selesai = False
        self.next(self.pendaftaran_ujian)

    @step
    def pendaftaran_ujian(self):
        """
        Langkah tambahan: Pendaftaran ujian akhir semester.
        """
        if self.perkuliahan_selesai:
            print("Mahasiswa berhasil mendaftar ujian akhir semester.")
            self.terdaftar_ujian = True
        else:
            print("Mahasiswa tidak bisa mendaftar ujian karena perkuliahan belum selesai.")
            self.terdaftar_ujian = False
        self.next(self.ujian_akhir)

    @step
    def ujian_akhir(self):
        """
        Langkah keempat: Mengikuti ujian akhir semester.
        """
        if self.terdaftar_ujian:
            print("Mahasiswa mengikuti ujian akhir semester.")
            self.ujian_selesai = True
        else:
            print("Mahasiswa tidak bisa mengikuti ujian karena tidak terdaftar.")
            self.ujian_selesai = False
        self.next(self.pengolahan_nilai)

    @step
    def pengolahan_nilai(self):
        """
        Langkah kelima: Pengolahan nilai ujian.
        """
        if self.ujian_selesai:
            print("Nilai ujian diproses.")
            self.nilai_diproses = True
        else:
            print("Nilai tidak diproses karena mahasiswa tidak mengikuti ujian.")
            self.nilai_diproses = False
        self.next(self.evaluasi)

    @step
    def evaluasi(self):
        """
        Langkah tambahan: Evaluasi hasil ujian.
        """
        if self.nilai_diproses:
            print("Hasil ujian dievaluasi, dan mahasiswa mendapatkan penilaian.")
            self.evaluasi_selesai = True
        else:
            print("Evaluasi gagal dilakukan karena nilai tidak diproses.")
            self.evaluasi_selesai = False
        self.next(self.mendapatkan_khs)

    @step
    def mendapatkan_khs(self):
        """
        Langkah terakhir: Mendapatkan Kartu Hasil Studi (KHS)
        """
        if self.evaluasi_selesai:
            print("Mahasiswa berhasil mendapatkan KHS.")
        else:
            print("Mahasiswa tidak mendapatkan KHS karena evaluasi belum selesai.")
        self.next(self.end)

    @step
    def end(self):
        """
        Mengakhiri proses.
        """
        print("Proses mengikuti kuliah informatika selesai.")

if __name__ == '__main__':
    InformatikaKuliahFlow().run()
