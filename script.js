// ******Cara membuat object dengan menggunakan Javascript*****

// *1. Object Literal
// PROBLEM : Terjadinya duplikasi jika ingin membuat object baru.

// let mahasiswa = {
//     nama: "Luthfi Nur Ramadhan",
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }
// *jika ingin membuat instansiasi baru maka harus membuat object baru namun tidak boleh memiliki nama yang sama.





// *2. Function declaration
// PROBLEM :
// Method yang tidak digunakan tetap terpanggil (namun bisa dibuat terpisah).
// Mengelola 2 object agar tidak mengelola 2 (buat propertynya menjadi Object.create()).
// Sebenarnya kita membutuhkan Mahasiswa tidak memerlukan methodMahasiswa.

// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main : function(jam) {
//         this.energi = this.energi - jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur : function(jam) {
//         this.energi = this.energi + (jam * 2);
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     // merubah {} menjadi Object.create(method)
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     // *Cara 1 tanpa Object.create(method);
//     // mahasiswa.makan = methodMahasiswa.makan;
//     // mahasiswa.main = methodMahasiswa.main;
//     // mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }
// // Instansiasi
// let luthfi = Mahasiswa("Luthfi Nur Ramadhan", 10);
// let izuchii = Mahasiswa("Izuchii", 20);





// *3. Constructor function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function(jam) {
//         this.energi = this.energi - jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// }
// // *Tidak perlu mendeklarasikan variabel (ganti dengan this) dan return.
// // *Gunakan keyword new
// let luthfi = new Mahasiswa("Luthfi Nur Ramadhan", 20);





// *Prototype
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi) {
    this.energi = this.energi + porsi;
    return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main = function(jam) {
    this.energi = this.energi - jam;
    return `Halo ${this.nama}, selamat bermain!`;
}

Mahasiswa.prototype.tidur = function(jam) {
    this.energi = this.energi + (jam * 2);
    return `Halo ${this.nama}, selamat tidur!`;
}

let izuchii = new Mahasiswa("Izuchii", 10);





// *Prototype versiClass
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi = this.energi + porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }

//     main(jam) {
//         this.energi = this.energi - jam;
//         return `Halo ${this.nama}, selamat bermain!`;
//     }

//     tidur(jam) {
//         this.energi = this.energi + (jam * 2);
//         return `Halo ${this.nama}, selamat tidur!`;
//     }
// }
// let izuchii = new Mahasiswa("Izuchii", 10);