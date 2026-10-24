
function cekBilangan() {
    
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}


const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}


function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function hitungNilai() {
    const inputTugas = document.getElementById("nilaiTugas").value;
    const inputUTS = document.getElementById("nilaiUTS").value;
    const inputUAS = document.getElementById("nilaiUAS").value;

    const tugas = Number(inputTugas);
    const uts = Number(inputUTS);
    const uas = Number(inputUAS);
    const hasil = document.getElementById("hasilNilai");

    if (
        inputTugas.trim() === "" ||
        inputUTS.trim() === "" ||
        inputUAS.trim() === "" ||
        ![tugas, uts, uas].every(
            n => Number.isFinite(n) && n >= 0 && n <= 100
        )
    ) {
        hasil.textContent = "Isi semua nilai dengan angka 0–100.";
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    hasil.textContent =
        "Nilai akhir: " + akhir.toFixed(2) +
        " | Predikat: " + predikat +
        " | Status: " + status;
}


function tampilkanTabel7() {
    let hasil = "";

    for (let i = 1; i <= 10; i++) {
        hasil += `7 x ${i} = ${7 * i}<br>`;
    }

    document.getElementById("tabel7").innerHTML = hasil;
}

function cekGenap(angka) {
    return angka % 2 === 0;
}

function togglePesan() {
    const pesan = document.getElementById("pesanToggle");

    if (pesan.style.display === "none") {
        pesan.style.display = "block";
    } else {
        pesan.style.display = "none";
    }
}
