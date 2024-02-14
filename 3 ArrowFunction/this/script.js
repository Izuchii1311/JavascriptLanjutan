// TODO: This pada arrow function

// *Constructor Function
// this akan mengacu pada object-nya (Mahasiswa).
    // const Mahasiswa = function() {
    //     this.nama = "Luthfi Nur Ramadhan";
    //     this.umur = 21;
    //     this.sayHello = function() {
    //         console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`);
    //     }
    // }
    // const Izuchii = new Mahasiswa();



// *Arrow Function (constructor)
// tidak bisa mengubah semua menjadi arrow fn. Tapi jika method diganti menjadi arrow fn bisa.
/* arrow fn, tidak menyimpan konteks this. */
    // const Mahasiswa2 = function() {
    //     this.nama = "Luthfi Nur Ramadhan";
    //     this.umur = 21;
    //     this.sayHello = () => {
    //         console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`);
    //     }
    // }
    // const Izuchii2 = new Mahasiswa2();



// *Arrow Function (object literal)
// lexical scope, this.nama akan mengecek ada tidak var nama.
// jika kita ubah menjadi arrow fn karena tidak menyimpan konteks this maka akan undefined.
    // const mhs1 = {
    //     nama: "Izuchii",
    //     umur: 21,
    //     sayHello: () => {
    //         console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`);
    //     }
    // }


// *Arrow Function (constructor)
// Fn Expression, tidak akan terkena hoisting.
// Fn Declaration, akan terkena hoisting.
    // const Mahasiswa3 = function() {
    //     this.nama = "Luthfi Nur Ramadhan";
    //     this.umur = 0;
    //     this.sayHello = () => {
    //         console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`);
    //     }
    //     setInterval(() => {
    //         // this akan mengacu ke global
    //         // oleh karena itu kita tidak lagi menggunakan function() tapi menggunakan arrow fn agar mengacu ke Objectnya.
    //         console.log(this.umur++);           // jika tidak menggunakan arrow fn maka akan NaN
    //     }, 1000);
    // }
    // const Izuchii3 = new Mahasiswa3();


// *Contoh penggunaan Arrow Function
const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        // Tukar isi variabel
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        console.log(this);
        this.classList.toggle(dua);
    }, 600);
});