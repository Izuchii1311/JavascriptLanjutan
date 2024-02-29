// TODO: Callback
// * Callback adalah sebuah function yang dikirimkan sebagai parameter pada function yang lain.

// ! Synchronous Callback (Jarang digunakan)
// Contoh 1
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt("Masukkan Nama :");
//     callback(nama);
// }

// tampilkanPesan(halo);


// Contoh 2
// function tampilkanPesan(callback) {
//     const nama = prompt("Masukkan Nama :");
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`) );


// Contoh 3
// const mhs = [
//     {
//         "nama": "Luthfi Nur Ramadhan",
//         "npm": "2142430",
//         "email": "luthfiramadhan.lr55@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": "1"
//     },
//         {
//         "nama": "Hutao",
//         "npm": "2142431",
//         "email": "hutaooo@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": "2"
//     },    {
//         "nama": "Huohuo",
//         "npm": "2142432",
//         "email": "huoalchemy@gmail.com",
//         "jurusan": "Design Komunikasi Visual",
//         "idDosenWali": "3"
//     }
// ]

// console.log("Mulai");
// // Contoh penerapan synchronous apabila terjadi run task yang sangat lama
// mhs.forEach(m => {
//     for (let i = 0; i < 1000000; i ++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log("Selesai");




// ! Asynchronous Callback
// Membuat sebuah function yang ketika dijalankan dia akan merequest data menggunakan AJAX.

/*
    url disini adalah url untuk api.
    success, adalah callback ketika data success didapatkan
    error, adalah callback kettika data gagal didapatkan

    Object Ajax, yaitu dengan menggunakan new XMLHttpRequest()
*/

// * AJAX vanilla Javascript
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if ( xhr.readyState === 4 ) {                   // ready
//             if ( xhr.status === 200 ) {                 // Status : OK
//                 success(xhr.response);
//             } else if ( xhr.status === 404 ) {          // Status : Page Not Found
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// getDataMahasiswa('data/mahasiswa.json', result => {
//     // Success - dan mengembalikan dalam bentuk array of object.
//     // console.log(JSON.parse(result));

//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
//     console.log('URL tidak ditemukan')
// });

// Code ini akan error karena diblock oleh CORS policy, agar bisa menjalankannya harus dipindahkan ke dalam web server.

// http://localhost:8080/learn%20javascript/Javascript%20Lanjutan/10%20Callbacks/Callback/

// Agar tidak harus menggunakan web server kita bisa menjalankan code nya dengan menggunakan ekstension live server di dalam vscode.




// *AJAX menggunakan jQuery
// hasil result nya sudah dikembalikan dalam bentuk JSON tidak perlu melakukan parsing data.
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: result => {
        result.forEach(mhs => console.log(mhs.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('selesai');





// *Perbedaannya :
/*
    Jika kita menggunakan synchronous, ketika kita menjalankan kode nya maka akan tampil seperti berikut
        mulai
        [data]
        selesai

    Sedangkan jika menggunakan asynchronous maka
        mulai
        selesai
        [data]

 */