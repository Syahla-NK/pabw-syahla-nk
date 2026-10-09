import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function render(daftar) {
  wadah.textContent = "";
  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

render(daftarProyek);

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const judul = document.querySelector("#judul-buku");
  const penulis = document.querySelector("#penulis");

  // Reset dulu
  judul.removeAttribute("aria-invalid");
  penulis.removeAttribute("aria-invalid");

  // Cek judul
  if (judul.value.trim() === "") {
    judul.setAttribute("aria-invalid", "true");
    judul.focus();
    return;
  }

  // Cek penulis
  if (penulis.value.trim() === "") {
    penulis.setAttribute("aria-invalid", "true");
    penulis.focus();
    return;
  }

  // Semua sah
  form.reset();
  console.log("Form sah, siap dikirim");
});