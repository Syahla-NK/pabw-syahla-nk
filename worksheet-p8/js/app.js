const profil = {
  nama: "Syahla Nadia Khoirunnisa",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const jumlahProyek = 3;

console.log(profil);
console.log(typeof profil.nama);
console.log(typeof jumlahProyek);

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

// 1. Fungsi kalimat perkenalan (lembar c)
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Fungsi format daftar keahlian
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));


// Array of object (lembar d)
const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Buku", tahun: 2026, selesai: true },
  { judul: "Aplikasi Todo", tahun: 2026, selesai: false },
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Buku");
console.log(katalog);

const judul = daftarProyek.map((proyek) => proyek.judul);
console.log(judul);

console.log(profil.alamat?.kota);   // undefined (nggak error)