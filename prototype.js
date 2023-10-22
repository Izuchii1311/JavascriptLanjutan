// PROTOTYPE
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// // Object ini sudah ada menempel ke dalam Object yang baru saja dibikin templateya / object Mahasiswa.
// // Method makannya akan berada di dalam __proto__
// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi = this.energi + porsi;
//     return `Halo ${this.nama}, Selamat Makan!`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi = this.energi - jam;
//     return `Halo ${this.nama}, Selamat Bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi = this.energi + (jam * 2);
//     return `Halo ${this.nama}, Selamat Tidur!`;
// }

// let izuchii = new Mahasiswa('Izuchii', 10);



// versi class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi = this.energi + porsi;
        return `Halo ${this.nama}, Selamat Makan!`;
    }

    main(jam) {
        this.energi = this.energi - jam;
        return `Halo ${this.nama}, Selamat Bermain!`;
    }

    tidur(jam) {
        this.energi = this.energi + (jam * 2);
        return `Halo ${this.nama}, Selamat Tidur!`;
    }
}

let izuchii = new Mahasiswa('Izuchii', 10);


// *let angka = [];
// *let angka = new Array();

// function Array() {
//     let this = Object.create(Array.prototype);
// }

let angka = [1, 2, 3];
// Kita bisa menggunakan method method ini.
// Dari mana method ini ?
// *Dia merupakan Prototype dari Object Array.
console.log(angka.reverse());
console.log(angka.sort());