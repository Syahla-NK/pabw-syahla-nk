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

## Pengungkapan AI

Bagian yang dibantu AI:
- Struktur awal `tokens.css` (dua lapis: primitif & semantik)
- Penjelasan konsep design token, kontras, dan `:user-invalid`
- Debugging typo (`pengalihan-tema` → `pengalih-tema`, `<input>` → `<label>`)
- Panduan langkah demi langkah pengerjaan Lembar A–G

Bagian yang saya kerjakan sendiri:
- Pemilihan warna utama (#C51662) dan uji kontras di WebAIM
- Penulisan `profil.html` (struktur semantik, form, tabel)
- Pengujian di browser (Network, Elements, Lighthouse)
- Commit Git dan penilaian mandiri

## pertemuan ke 5 - Rencana Kerangka

- Baris halaman: auto / 1fr / auto
- Kolom isi: 16rem 1fr
- Navbar: flex
- Isi: grid
- Galeri: grid repeat(auto-fit, minmax(16rem, 1fr))

## Pertemuan 5 – Layout Flexbox dan Grid

- Kerangka halaman pakai grid: `auto 1fr auto` baris + `1fr 1fr` kolom
- Navbar pakai flex, galeri pakai grid auto-fit
- Penempatan pakai `grid-column: span 2`

### Catatan penggunaan AI

Struktur CSS (layout.css dan komponen.css) disusun dengan bantuan AI
berdasarkan worksheet P5. Isi konten, data buku, dan gambar milik saya sendiri.

## Pertemuan 6 – Responsif Mobile-First

- Baris meta viewport terpasang di `profil.html`
- File baru: `responsif.css`
- Gaya dasar: 1 kolom untuk layar sempit
- Titik henti: 48rem (tablet, galeri 2 kolom) & 60rem (desktop, sidebar + konten)
- Gambar dibatasi `max-width: 100%`, tabel pakai `.table-wrap` dengan `overflow-x: auto`
- Tidak ada gulir mendatar di 360 px, 768 px, dan 1280 px

### Catatan penggunaan AI

Struktur `responsif.css` (viewport, gaya dasar, dua titik henti) disusun
dengan bantuan AI berdasarkan worksheet P6. 