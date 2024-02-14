// TODO: Prototype
// * Ini sama seperti konsep inheritenance di dalam bahasa pemrograman OOP seperti java atau PHP.
// * Jika di dalam javascript disebut dengan 'prototyple inheritenance'.

// ! Versi Object Prototyple Inheritenance
// function Mahasiswa(nama, energi) {
//     // let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi;

//     // return this;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi = this.energi + porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(tenaga) {
//     this.energi = this.energi - tenaga;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi = this.energi + jam * 2;
//     return `Halo ${this.nama}, selamat beristirahat!`;
// }

// let Izuchii = new Mahasiswa("Izuchii", 10);


// Kenapa tidak menggunakan class ?
// Karena pada awalnya javascript dibuat dalam waktu yang singkat, untuk sekarang javascript bisa menggunakan class.

// ! Versi Class
class Mahasiswa {
    constructor (nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi = this.energi + porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

    main(tenaga) {
        this.energi = this.energi - tenaga;
        return `Halo ${this.nama}, selamat bermain!`;
    }

    tidur(jam) {
        this.energi = this.energi + jam * 2;
        return `Halo ${this.nama}, selamat beristirahat!`;
    }
}

let Izuchii = new Mahasiswa("Izuchii", 10);



// Dengan memahami prototype kita bisa paham jika menggunakan tipe data apapun di dalam javascript. Karena semua yang ada di dalamnya adalah object.
// Karena dia object pasti memiliki __proto__

// let angka = [];
// let angka = new Array();

// misalkan kita mempunyai array seperti berikut.
let angka = [1,2,3];
console.log(angka.reverse());

// ? Darimana reverse atau lain sebagainya ??
// dia merupakan prototype dari object array