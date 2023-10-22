// Closure
// function init() {
//     let nama = "Luthfi";                        // Local variabel
//         function tampilNama() {                 // Inner Function (closure)
//             console.log(nama);                  // Akses ke parent variabel
//         }
//     return tampilNama;
// }

// let result = init();
// result();


// Kenapa menggunakan closure ?
/*  untuk membuat function factories
    untuk membuat private method
*/

// *Function Factories
    // sudah mengisikan data waktu tinggal menunggu data dari nama, jadi functionnya jika tidak diisikan argument untuk nama maka function baru berjalan setengahnya
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan.`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatSore = ucapkanSalam('sore');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('Izuchii');
// selamatSiang('Izuchii');
// selamatSore('Izuchii');
// selamatMalam('Izuchii');



// *Private Method
    // misalkan nilai awal counter 0, tiba tiba karena semakin banyak code counter tertimpa jadi 10.
    // Maka semuanya akan terpengaruh
    let add = (function() {
        let counter = 0;
        return function() {
            return ++counter;
        };
    })();

    counter = 100;

    console.log(add());
    console.log(add());
    console.log(add());
