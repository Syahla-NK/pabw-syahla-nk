export function render(state) {
  const wadah = document.querySelector('#daftar');
  const kosong = document.querySelector('#pesan-kosong');

  wadah.textContent = '';

  const tampil = state.daftarProyek.filter(
    (p) => state.kategoriAktif === 'semua' || p.kategori === state.kategoriAktif
  );

  if (tampil.length === 0) {
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  tampil.forEach((proyek) => {
    const li = document.createElement('li');
    li.className = 'kartu';
    li.textContent = proyek.judul;
    wadah.appendChild(li);
  });
}