document.getElementById("parallaxContainer").style.backgroundImage =
  'url("merbabu80.png")';
const inputNameDepan = document.getElementById("Nama Depan");
const inputNameBelakang = document.getElementById("Nama Belakang");
const inputAlamat = document.getElementById("Alamat");
const inputNoTelelpon = document.getElementById("No Telepon");
const inputJumlahAnggota = document.getElementById("Jumlah Anggota");
const inputPembayaran = document.getElementById("Pembayaran");
const inputTanggalPendakian = document.getElementById("Tanggal Pendakian");

function addData() {
  const NamaDepan = inputNameDepan.value;
  const NamaBelakang = inputNameBelakang.value;
  const Alamat = inputAlamat.value;
  const NoTelelpon = inputNoTelelpon.value;
  const JumlahAnggota = inputJumlahAnggota.value;
  const Pembayaran = inputPembayaran.value;
  const TanggalPendakian = inputTanggalPendakian.value;

  const tableData = document.getElementById("data-table");
  const row = document.createElement("tr");

  const value = [
    NamaDepan,
    NamaBelakang,
    Alamat,
    NoTelelpon,
    JumlahAnggota,
    Pembayaran,
    TanggalPendakian,
  ];

  for (let i = 0; i < value.length; i++) {
    const cell = document.createElement("td");
    cell.innerHTML = value[i];
    row.appendChild(cell);
  }

  tableData.appendChild(row);
}
