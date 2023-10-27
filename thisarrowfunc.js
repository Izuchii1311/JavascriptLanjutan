// *this pada arrow function

// // Konsep This pada function Expression akan mengembalikan window
// let nyoba = function() {
//     return this;
// }
// console.log(nyoba());

// // Konsep This pada function Declaration akan mengembalikan window
// function coba() {
//     return this;
// }
// console.log(coba());

// // Konsep This pada function Constructor akan mengembalikan function tersebut Coba{}
// function Coba () {
//     return this;
// }
// console.log(new Coba());



// *Konsep This pada Arrow function.
// *Contoh pada constructor function
// const Mahasiswa = function() {
//     this.nama = "Luthfi Nur Ramadhan";
//     this.umur = 21;
//     this.sayHello = function() {
//         console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur} tahun.`);
//     }
//     console.log(this);
// }
// const izuchii = new Mahasiswa();


// *kita ubah menjadi Arrow function.
// tidak bisa mengubah semuanya menjadi arrow function.
// sehingga tidak bisa constructor function diubah semuanya menjadi arrow function, kecuali method
// const Mahasiswa = function() {
//     this.nama = "Luthfi Nur Ramadhan";
//     this.umur = 21;
//     this.sayHello = () => {
//         // Sebenarnya arrow function tidak menyimpan konteks this, maka akan mencarinya keluar
//         console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur} tahun.`);
//     }
//     console.log(this);
// }
// const izuchii = new Mahasiswa();





// *Konsep This pada Arrow function.
// *Contoh pada Object Literal
const mhs1 = {
    nama: "Luthfi Nur Ramadhan",
    umur: 21,
    sayHello: () => {
        // Jika menggunakan function biasa maka this.nama akan mencari ke atas, yaitu nama
        // Namun konteksnya akan berbeda jika kita menggunakan arrow function.
        // This.nama akan berisi undefined, karena akan mencari this.
        console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur} tahun.`);
    }
}




// *Contoh 1
// *Constructor Function dengan metode penulisan Function Expression.
// const Mahasiswa = function() {
//     this.nama = "Luthfi Nur Ramadhan";
//     this.umur = 21;
//     // Function expression disimpan dahulu ke dalam variabel sehingga tidak akan terkena hoisting.
//     this.sayHello = function() {
//         console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur} tahun.`);
//     }

//     // function yang otomatis dijalankan
//     // akan kena hoisting, sehingga ketika thisnya dipanggil this tidak akan mengacu ke this.umur yang ada di Mahasiswa. Dan setInterval memang akan mengacu ke global (window) untuk mencari this.umur dalam konteks global
//     // Undefined++ = NaN.
//     // setInterval(function() {
//     //     console.log(this.umur++);
//     // }, 500);

//     // kita ubah menjadi arrow function
//     // thisnya akan mengacu ke Mahasiswa.
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }
// const izuchii = new Mahasiswa();






// *Contoh Kasus yang biasa diterapkan
const box = document.querySelector('.box');

box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    // mengecek ada tidaknya class 'satu;
    if(this.classList.contains(satu)) {
        // digunakan untuk menukar isinya agar animasi awal dan akhir sama.
        // tukar isi nya
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});