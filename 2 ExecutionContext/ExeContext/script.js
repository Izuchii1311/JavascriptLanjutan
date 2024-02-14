// TODO: Execution Context Javascript.

// *reference error: nama is no undefined
// console.log(nama);

// *Undefined
// console.log(nama);
// var nama = "Luthfi Nur Ramadhan";

    // saat program dijalankan yang terjadi adalah, ada sesuatu yang disebut creation phase di dalam konteks global. Karena di buat di dalam jsnya langsung bukan di dalam function.
    // pada creation phase ini js akan mengecek apakah ada variabel / function di dalam code ?? sebelum menjalankan console.log
    // jika ada dia akan membuat nama variabel akan diisi dengan udefined. Bayangan mudahnya seperti ini

    // *Creation Phase (Global context)
        // var nama = undefined;
        // console.log(nama);                  // hasilnya undefined
        // var nama = "Luthfi Nur Ramadhan";
        // console.log(nama);                  // hasilnya Luthfi Nur Ramadhan

        // jika function maka akan diisi function itu sendiri (code functionnya).

        //! Konsep ini disebut dengan Hoisting


    // selain itu ada juga yang didefinisikan, secara default.
    /*
        window = global object
        this = window
    */


    // Execution Phase

// *menampilkan var nama
// var nama = "Luthfi Nur Ramadhan";
// console.log(nama);






// Function tersebut yang akan ditampilkan
// console.log(sayHello);

// // Hasil return dari function namun dengan hasil undefined dari variabel-nya.
// console.log(sayHello());

// var nama = "Luthfi Nur Ramadhan";
// var umur = 21;

// function sayHello() {
//     return `Halo, nama saya ${nama} usia saya sekarang ${umur} tahun.`;
// }



// Jika bertemu function maka execution phasenya sudah tidak global lagi
// disini function seolah olah membuat local execution context yang didalamnya sama seperti adanya phase creation & execution.
/*
    selain kita bisa akses ke windows kita mempunyai akses ke arguments yang nantinya kita bisa berisi apapun yang kita masukkan di dalam parameter functionnya.

    Melakukan Hoisting sama seperti Global Context
 */

// var nama = "Luthfi Nur Ramadhan";
// var username = "luth1311";

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     console.log(arguments);
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// Sebelum dijalankan di dalam memori sudah ada
/*
    nama = undefined;
    username = undefined;
    cetakURL = code fn;

    selanjutnya nama & username akan diisikan.

    function di skip dan akan melakukan hoisting pada function yang ada di dalam console.log()

    disini akan menjalankan function cetakURL dimana akan melakukan local execution context

    username diisi dengan izuchii1311
    instagramURL = undefined;

    instagramURL = 'http://instagram.com/'

    mengembalikan return

    jalankan kembali console.log
 */




// Contoh Kasus
function a() {
    console.log('ini a');

    function b() {
        console.log('ini b');

        function c() {
            console.log('ini c');
        }
        c();
    }
    b();
}
a();

// hasilnya a, b, c
// semuanya akan masuk ke dalam execution stack.
// hasil yang sudah di eksekusi dan ada di dalam execution stack akan menghilang dan dihapus.





// Contoh lain
// var nama = "Luthfi Nur Ramadhan";
// var username = "luth1311";

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@doddyferdiansyah'));

// maka hasilnya akan diganti dengan @doddyferdiansyah.



// Contoh lain
// var nama = "Luthfi Nur Ramadhan";
// var username = "luth1311";

// function cetakURL() {
//     console.log(arguments);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@doddyferdiansyah'));

// Maka hasilnya akan luth1311
// karena username itu akan di cek di dalam variabel local, jika tidak ada maka akan mengecek ke dalam variabel global.
// Lalu kemana @doddyferdiansyahnya ?
// dia masuk ke dalam sebuah object yang namanya arguments ini terjadi pada fase creation & excetution phase di local execution context







// Latihan
// function satu() {
//     var nama = 'Luthfi Nur Ramadhan';
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = "Hutao";
// satu();
// dua('Hanabi');
// console.log(nama);