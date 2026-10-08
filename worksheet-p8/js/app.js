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

// 1. Fungsi kalimat perkenalan
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Fungsi format daftar keahlian
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));