// TODO: Desturcturing Function

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b];
// }

// *Tanpa menggunakan Destructuring
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// console.log(jumlah);
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);


// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b];
// }

// *Menggunakan Destructuring
// const [jumlah, ,kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah)
// console.log(kali)


// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b];
// }

// // *Jika return value-nya bertambah
// const [tambah, kurang, kali, bagi = "Tidak ada"] = kalkulasi(2,3);
// console.log(`${tambah} hasil tambah. ${kurang} hasil kurang. ${kali} hasil kali. ${bagi} hasil bagi.`);

// ! Problemnya, ketika kita melakukan destructuring pada array itu urutanya harus pas.


// *Merubah return value menjadi Object agar urutan tidak berpengaruh.
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// }

// const {bagi, tambah, kurang, kali} = kalkulasi(2,3);
// console.log(`${tambah} hasil tambah. ${kurang} hasil kurang. ${kali} hasil kali. ${bagi} hasil bagi.`);


// *Destructuring Function Arguments
const mhs1 = {
    nama: "Luthfi Nur Ramadhan",
    npm: 2142430,
    email: "luthfiramadhan.lr55@gmail.com",
    nilai: {
        tugas: 80,
        uts: 90,
        uas: 85
    }
};

// ! cara 1
// function cetakMhs(nama, npm) {
//     return `Halo, nama saya ${nama} npm saya adalah ${npm}`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.npm));

// ! cara 2
// function cetakMhs(mhs) {
//         return `Halo, nama saya ${mhs.nama} npm saya adalah ${mhs.npm}`;
// }

//     console.log(cetakMhs(mhs1));

// ! cara 3 - desturcturing arguments
// function cetakMhs({nama, npm, nilai}) {
//     return `Halo, nama saya ${nama} npm saya adalah ${npm}, dan nilai uas saya ${nilai.uas}`;
// }

// console.log(cetakMhs(mhs1));

// ! cara 4 - destructuring arguments bersarang
function cetakMhs({nama, npm, nilai: {tugas, uts, uas:ujianAkhirSemester = "Belum mengikuti UAS"}}) {
    return `Halo, nama saya ${nama} npm saya adalah ${npm}, dan nilai uas saya ${ujianAkhirSemester}`;
}

console.log(cetakMhs(mhs1));