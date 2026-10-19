export const profil = {
  nama: "Syahla Nadia Khoirunnisa",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export const daftarProyek = [
  { judul: "Laut Bercerita", tahun: 2017, kategori: "fiksi" },
  { judul: "Cantik Itu Luka", tahun: 2002, kategori: "fiksi" },
  { judul: "Yang Telah Lama Pergi", tahun: 2021, kategori: "fiksi" },
  { judul: "Malioboro at Midnight", tahun: 2023, kategori: "fiksi" },
  { judul: "4 Masa 1 Mimpi", tahun: 2023, kategori: "non-fiksi" },
  { judul: "172 days", tahun: 2022, kategori: "non-fiksi" },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export function formatKeahlian(daftar) {
  return daftar.join(" · ");
}