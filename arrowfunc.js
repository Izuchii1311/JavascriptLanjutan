// *Function Declaration
// function tampilPesan(nama) {
//    return `Halo, ${nama}`;
// }
// console.log(tampilPesan("Izuchii"));


// *Function Expression - fungsi tanpa nama (anonynouse function)
// let tampilNama = function(nama) {
//  return `Halo, ${nama}`;
// }
// console.log(tampilNama("Izuchii"));


// *Arrow Function
// Bentuk lain yang lebih ringkas dari Funcion Expression.

// 1 Parameter
// let tampilPesan = (nama) => { return `Halo, ${nama}`; }

// // implisit return
// let tampilPesan2 = nama => `Halo, ${nama}`;
// console.log(tampilPesan2("Izuchii"));

// // 2 Parameter
// let tampilNama = (nama, waktu) => { return `Halo, ${nama}, Selamat ${waktu}`; }
// console.log(tampilNama("Luthfi Nur Ramadhan", "Pagi"));

// // Tanpa parameter
// let tampilInfo = () => `Hello World`;
// console.log(tampilInfo());




// Kasus
// *Map untuk memetakkan sebuah function kedalam array
// Menghitung jumlah huruf pada text di array
let mahasiswa = ["Luthfi Nur Ramadhan", "Hutao", "Izuchii"];

// *Mengembalikan menjadi object
let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jumlahHuruf: nama.length }));
console.log(jumlahHuruf);                                       // result (3) [{…}, {…}, {…}]
console.table(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// *Merubahnya menjadi arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);                                       // result (3) [19, 5, 7]
