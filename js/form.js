const formLapor = document.getElementById('formLapor');

formLapor.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah halaman refresh

    // Mengambil nilai dari form
    const nama = document.getElementById('namaBarang').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const lokasi = document.getElementById('lokasi').value;
    const fotoFile = document.getElementById('fotoBarang').files[0];

    // Fungsi internal untuk menyimpan data
    const prosesSimpan = (fotoBase64 = '') => {
        const barangBaru = {
            id: Date.now(),
            nama: nama,
            deskripsi: deskripsi,
            lokasi: lokasi,
            foto: fotoBase64,
            status: 'Proses'
        };

        // Memanggil array dari app.js
        daftarBarang.push(barangBaru);
        simpanData(); // Memanggil fungsi dari app.js
        renderBarang(); // Memanggil fungsi dari app.js
        
        formLapor.reset(); // Kosongkan form
        alert('Laporan berhasil dikirim!');
    };

    // Logika Upload Foto
    if (fotoFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
            prosesSimpan(event.target.result); // Mengubah gambar jadi teks
        };
        reader.readAsDataURL(fotoFile);
    } else {
        prosesSimpan();
    }
});