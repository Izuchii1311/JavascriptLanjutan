// CLOSURE
// Execution Context, Hoisting & Scope.

// Dengan menggunakan var resultnya akan undefined.
// Kenapa tidak error jika kita memanggilnya terlebih dahulu ?
console.log(nama);
var nama = 'Luthfi Nur Ramadhan';

// *Creation Phase pada global context.
// js akan mengecek apakah ada var atau function. jika ada dia akan membuat nama variabel & akan diisi dengan udefined jika ada function maka akan diisi function itu sendiri.
    // var nama = undefined;            -> nilai diisi dengan undefined
    // nama function = fn()             -> mengembalikan function itu sendiri

    // *ini merupakan konsep Hoisting.
    // Meskipun kita menuliskan dibawah secara otomatis akan dinaikkan ke atas.
    // Selain 2 hal diatas ada juga yang didefinisikan.
        // window = global Object
        // this = window

// *Execution Phase (menjalankan baris programnya dari atas ke bawah).


// Contoh
var nama = "Luthfi Nur Ramadhan";
var umur = 20;

console.log(sayHallo());    /* result Halo nama saya Luthfi Nur Ramadhan, saya 21 tahun*/
function sayHallo() {
    return `Halo nama saya ${nama}, saya ${umur} tahun`;
}


// Ketika bertemu function execution seolah olah dia menjalankan execution contextnya sendiri.
// jadi jika ketemu function excecutionnya tidak jadi global context lagi.
// jika bertemu function dia seolah olah membuat local execution context yang di dalamnya sama ada creation & execution phase.
// kita bisa akses window, ke arguments (yang nantinya bisa berisi apapun yang kita masukan ke dalam parameter dari function). Dan di dalamnya ada Hoisting juga.




// Contoh 2
// var nama = "Luthfi Nur Ramadhan";
// // var username = "@izuchii1311";

// function cetakUrl(username) {
//     console.log(arguments);
//     var instagramUrl = `http://instagram.com/`;
//     return instagramUrl + username;
// }

// console.log(cetakUrl('hutao'));     /* result http://instagram.com/hutao */


// Contoh 3
function a() {
    console.log('ini a');

    // Hoisting terlebih dahulu baru menampilkan console log
    function b() {
        console.log('ini b');

        // Hoisting terlebih dahulu baru menampilkan console log
        function c() {
            console.log('ini c');
        }

        c();
    }

    b();
}

// a();
// result
/*  ini a
    ini b
    ini c
*/
// jika sudah di jalankan maka akan mengilangkan dari tumpukan eksekusinya.