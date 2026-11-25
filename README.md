# Portofolio Neyla Octaliani

Website portofolio satu halaman (single page) milik Neyla Octaliani, siswi kelas 10 PPLG SMKN 1 Bangkinang. Dibuat dengan HTML, CSS, dan JavaScript biasa, tanpa framework.

## Isi halaman

- Perkenalan dengan foto profil bulat
- Riwayat sekolah: TK Bangkinang, SD 007 Bangkinang, SMPN 2 Bangkinang, SMKN 1 Bangkinang (PPLG)
- Yang sedang dipelajari: membuat web portofolio

## Struktur folder

```
neyla-portofolio/
├── index.html
├── README.md
├── .gitignore
├── vercel.json
├── css/
│   └── style.css
├── js/
│   └── script.js
└── foto/
    └── foto-neyla.jpg
```

## Cara menjalankan

Buka `index.html` langsung di browser, atau pakai ekstensi Live Server di VS Code.

## Cara upload ke GitHub

```bash
git init
git add .
git commit -m "Portofolio pertama"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Ganti `USERNAME` dan `NAMA-REPO` dengan milikmu.

## Cara deploy ke Vercel

1. Upload repo ke GitHub (lihat langkah di atas). Pastikan `index.html` ada di paling luar repo, bukan di dalam folder lain.
2. Buka [vercel.com](https://vercel.com) dan masuk dengan akun GitHub.
3. Klik **Add New**, pilih **Project**, lalu **Import** repo ini.
4. Pada **Framework Preset** pilih **Other**. Kolom Build Command dan Output Directory dibiarkan kosong.
5. Klik **Deploy**. Setelah selesai, Vercel memberi alamat `nama-repo.vercel.app`.

Setiap kali kamu `git push`, Vercel otomatis memperbarui websitenya.

## Cara menampilkan online (GitHub Pages)

1. Buka repo di GitHub, lalu masuk ke **Settings** dan pilih **Pages**.
2. Pada **Build and deployment**, pilih **Deploy from a branch**.
3. Pilih branch `main` dan folder `/ (root)`, lalu **Save**.
4. Tunggu beberapa menit, alamat websitenya akan muncul di halaman yang sama.

## Mengubah isi

- Cerita tiap jenjang sekolah: `js/script.js`, bagian `data`, kolom `d`.
- Cerita bagian "Yang sedang kupelajari": `index.html`, di dalam tag `<em>`.
- Foto: ganti `foto/foto-neyla.jpg` (sebaiknya berbentuk persegi).
