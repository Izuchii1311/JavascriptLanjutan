// TODO: Destructuring Variables

// *Destructuring Array
// const nama = ['Luthfi', 'Nur', 'Ramadhan'];

// // const [namaDepan, namaTengah, namaBelakang] = nama;

// // Skip Items
// const [namaDepan, , namaBelakang] = nama;
// console.log(namaDepan)
// console.log(namaBelakang)


// *Swap Items
// let a = 1;
// let b = 2;

// [a, b] = [b, a]

// console.log(a)
// console.log(b)


// *Return Value Pada Function
// function coba() {
//     return [1, 2] ;
// }

// const [a, b] = coba();
// console.log(a)
// console.log(b)


// *Rest Parameter
// const [a, b, ...values] = [1, 2, 3, 4, 5];

// console.log(a)
// console.log(b)
// console.log(values)




// *Destructuring Object
// const mhs = {
//     nama: "Luthfi Nur Ramadhan",
//     umur: 21
// }

// // nama variabel harus sama dengan property
// const {nama, umur} = mhs;
// console.log(nama)
// console.log(umur)


// *Assignment tanpa deklarasi object
// ({nama, umur} = {
//     nama: "Luthfi Nur Ramadhan",
//     umur: 21
// })

// console.log(nama)
// console.log(umur)


// *Memberikan nama variabel baru
// const mhs = {
//     nama: "Luthfi Nur Ramadhan",
//     umur: 21
// }

// const {nama: namaMahasiswa, umur: umurMahasiswa} = mhs;
// console.log(namaMahasiswa)
// console.log(umurMahasiswa)


// *Memberikan default Value
// const mhs = {
//     nama: "Luthfi Nur Ramadhan",
//     umur: 21
// }

// const {nama: namaMahasiswa, umur: umurMahasiswa, email: emailMahasiswa = 'email@default.com'} = mhs;
// console.log(namaMahasiswa)
// console.log(umurMahasiswa)
// console.log(emailMahasiswa)


// *Menggunakan Rest Parameter
// const mhs = {
//     nama: "Luthfi Nur Ramadhan",
//     umur: 21,
//     email: "luthfiramadhan.lr55@gmail.com"
// }

// const {nama: namaMahasiswa, ...values} = mhs;
// console.log(namaMahasiswa)
// console.log(values)


// *Mengambil field pada object, setelah dikirim sebagai parameter dari function
const mhs = {
    id: 214,
    nama: "Luthfi Nur Ramadhan",
    umur: 21,
    email: "luthfiramadhan.lr55@gmail.com"
}

// Menangkap hanya id nya saja sisanya diabaikan, dengan menggunakan { }
function getIdMhs({ id }) {
    return id;
}

console.log(getIdMhs(mhs));