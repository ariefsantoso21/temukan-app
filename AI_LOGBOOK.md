# AI Logbook - TEMUKAN

## Tahap 1: Eksplorasi Ide & Perancangan Solusi
- **Prompt ke AI:** "Saya ingin membuat website pelaporan barang hilang untuk sekolah. Fitur apa saja yang harus ada?"
- **Saran AI:** Website butuh form input (nama, deskripsi, lokasi, foto) dan halaman daftar barang.
- **Validasi & Modifikasi Mandiri:** Saya memilih fitur tambahan yaitu fitur "Pencarian" agar pengguna bisa mencari barang tanpa harus scroll panjang.

## Tahap 2: Penyusunan Kerangka Kode (Scaffolding)
- **Prompt ke AI:** "Buatkan struktur HTML sederhana untuk form input dan daftar barang."
- **Saran AI:** Memberikan struktur `<form>` dengan `<input>` dan `<div>` untuk menampilkan daftar.
- **Validasi & Modifikasi Mandiri:** Saya memodifikasi struktur HTML dengan menambahkan class-class CSS agar tampilannya rapi dan responsif (bisa dibuka di HP).

## Tahap 3: Pemecahan Masalah & Penanganan Galat (Debugging)
- **Prompt ke AI:** "Kenapa data barang hilang lagi setelah di-refresh?"
- **Saran AI:** Karena belum ada database, kita bisa gunakan `localStorage.setItem` untuk menyimpan data di browser.
- **Validasi & Modifikasi Mandiri:** Ternyata saya lupa menggunakan `JSON.stringify` saat menyimpan data dan `JSON.parse` saat mengambil data. Saya perbaiki dan sekarang data tidak hilang saat di-refresh.

## Tahap 4: Refleksi & Penjelasan Kode
- **Prompt ke AI:** "Jelaskan bagaimana cara kerja fitur pencarian (search) di JavaScript."
- **Saran AI:** Menggunakan fungsi `.filter()` untuk menyaring data berdasarkan kata kunci yang diketik pengguna.
- **Validasi & Modifikasi Mandiri:** Saya menambahkan fungsi `.toLowerCase()` pada kata kunci agar pencarian tidak membedakan huruf besar dan kecil. Saya juga menguji fitur ini dan berhasil.