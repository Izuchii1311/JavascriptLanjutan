// TODO: Membuat Object Pada Javascript

// * 1. Object Literal
// let mahasiswa = {
//     // Property
//     nama : "Luthfi Nur Ramadhan",
//     energi : 10,
//     // Method
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
// }

// let mahasiswa2 = {
//     // Property
//     nama : "Izuchii",
//     energi : 10,
//     // Method
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main : function(tenaga) {
//         this.energi = this.energi - tenaga;
//         console.log(`Selamat bermain ${this.nama}`);
//     }
// }



// * 2. Function Declaration
// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main : function(tenaga) {
//         this.energi = this.energi - tenaga;
//         console.log(`Selamat bermain ${this.nama}`);
//     },
//     tidur : function(jam) {
//         this.energi = this.energi + jam * 2;
//         console.log(`Selamat beristirahat ${this.nama}`);
//     }
// };


// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa) ;

//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let Izuchii = Mahasiswa('Izuchii', 10);
// let Luthfi = Mahasiswa('Luthfi', 10);



// * 3. Constructor function
// Keyword New
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function(tenaga) {
        this.energi = this.energi - tenaga;
        console.log(`Selamat bermain ${this.nama}`);
    }
}

let Izuchii = new Mahasiswa('Izuchii', 10);
let Luthfi = new Mahasiswa('Luthfi', 10);
