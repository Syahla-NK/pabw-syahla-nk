import { ambilNotisia } from './api.js';

const wadah = document.querySelector('#daftar');

function gambar(daftar) {
  wadah.textContent = '';
  daftar.forEach(function (n) {
    const kartu = document.createElement('article');
    const judul = document.createElement('h3');
    judul.textContent = n.title;
    kartu.appendChild(judul);
    wadah.appendChild(kartu);
  });
}

async function tampilkan() {
  wadah.textContent = 'Memuat...';

  try {
    const daftar = await ambilNotisia();

    if (daftar.length === 0) {
      wadah.textContent = 'Belum ada notisia';
      return;
    }

    gambar(daftar);
  } catch (galat) {
    wadah.textContent = 'Gagal memuat data: ' + galat.message;
  }
}

tampilkan();
