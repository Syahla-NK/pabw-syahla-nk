# pabw-syahla-nk
## Pertemuan 3 – Halaman profil saya

Topik: koleksi buku di rak saya.

 Judul halaman: Rak Buku Saya
 Deskripsi: daftar buku yang saya miliki beserta status bacanya
 Tautan navigasi: Daftar Buku, Tambah Buku, Tentang Saya
 Dua bagian utama: Daftar Buku, Tambah Buku
 Kolom tabel: judul, penulis, tahun terbit, status baca
 Kolom form: judul, penulis, status baca
 Gambar: koleksi-1.webp

## Catatan penggunaan AI

Struktur HTML disusun dengan bantuan AI berdasarkan worksheet P3.
Isi data buku saya tulis sendiri.

## pertemuan 4 - Design token halaman profil

- Berkas gaya yang akan dibuat: tokens.css,base.css,layout.css, komponen.css, tema.css
- Warna Utama: #c51662 (pink tua), dipilih karna warna kesukaan saya dan kontras baik dengan putih (5.72:1, lolos) dan memberikan kesan playful dan modern 

## Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|-------|-------|-----------|
| --color-primary | #c51662| tombol, tautan, penanda |
| --color-fg | #1a1414 | warna text utama |
| --color-bg | #ffffff | latar halaman |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

kriteria selesai saya: mengubah --color-primary di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Pertemuan 5 – Layout Flexbox dan Grid

- Kerangka halaman pakai grid: `auto 1fr auto` baris + `1fr 1fr` kolom
- Navbar pakai flex, galeri pakai grid auto-fit
- Penempatan pakai `grid-column: span 2`

### Catatan penggunaan AI – Pertemuan 5

Struktur CSS (`layout.css` dan `komponen.css`) disusun dengan bantuan AI
berdasarkan worksheet P5. Isi konten, data buku, dan gambar milik saya sendiri.

## Pertemuan 6 – Responsif Mobile-First

- Viewport terpasang, `responsif.css` berisi gaya dasar + 2 titik henti
- Titik henti: 48rem (galeri 2 kolom), 60rem (sidebar + konten)
- Gambar dibatasi `max-width: 100%`, tabel pakai `.table-wrap`
- Tidak ada gulir mendatar di 360 px, 768 px, dan 1280 px

### Catatan penggunaan AI – Pertemuan 6

Struktur `responsif.css` (viewport, gaya dasar, dua titik henti) disusun
dengan bantuan AI berdasarkan worksheet P6. Isi konten milik saya sendiri.

## Pertemuan 8 – JavaScript Modern

- Data profil dipindahkan ke `js/app.js` sebagai variabel, objek, dan array
- Dua fungsi murni: `buatPerkenalan()` dan `formatKeahlian()`
- Array methods: `map`, `filter`, `find` pada `daftarProyek`
- Console bersih, 3 screenshot bukti tersimpan di `worksheet-p8/`

### Catatan penggunaan AI – Pertemuan 8

**Dibantu AI:**
- Struktur variabel, objek, dan array di `app.js`
- Dua fungsi murni (`buatPerkenalan`, `formatKeahlian`)
- Penggunaan `map`, `filter`, `find`

**Dikerjakan sendiri:**
- Isi data (nama, keahlian, daftar proyek)
- Penjelasan galat di Lembar E
- Screenshot Console