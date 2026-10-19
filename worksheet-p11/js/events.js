import { pilihKategori } from './state.js';

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
  });
}