// TODO: Closure
// * Closure, merupakan kombinasi antara function dan lingkungan leksikal (Lexical scope) di dalam function tersebut. -mozila

// * Closure, adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi. -w3school

// * Closure, adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan. (Function return function) -code fellow.


// // TODO: Lexical Scope
// function init() {
//     let nama = "Izuchii";       // Local Variabel
//     function tampilNama() {     // inner function (closure)
//         console.log(nama);      // akses ke parent variabel
//     }
//     tampilNama();
// }
// init();

// result: Izuchii

//! Disebut closure ketika inner function ini membutuhkan variabel yang ada di parentScope-nya


// function init2() {
//     let nama = "Izuchii";       // Local Variabel
//     let umur = 21;
//     function tampilNama2() {    // inner function (closure)
//         console.log(nama);      // akses ke parent variabel
//         console.log(umur);
//     }
//     console.dir(tampilNama2);
// }
// init2();




// function init3() {
//     function tampilNama3(nama) {    // inner function (closure)
//         console.log(nama);      // akses ke parent variabel
//     }
//     return tampilNama3;
// }
// let panggilNama = init3();
// panggilNama("Izuchii");

// sama saja dengan code berikut

// function init3() {
//     return function(nama) {    // inner function (closure)
//         console.log(nama);      // akses ke parent variabel
//     }
// }
// let panggilNama2 = init3();
// panggilNama2("Izuchii");



// * Alasan menggunakan closure
/*
    1. Untuk membuat function factories.
    2. Untuk membuat seolah olah kita membuat private method.
 */

// * Function Factories
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu} semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');
// selamatPagi('Luthfi Nur Ramadhan');
// selamatSiang('Izuchii');
// selamatMalam('Hutao');


// * Private Method
// let add = function() {
//     let counter = 0 ;
//     return function() {
//         return ++counter;
//     }
// }

// counter = 100;
// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());


//* Immediately invoke function
let add = (function() {
    let counter = 0 ;
    return function() {         // inner function
        return ++counter;
    }
})();

counter = 100;
console.log(add());
console.log(add());
console.log(add());