// TODO: New Looping For ... of vs. For ... in
// ! For ... of
// Sebuah looping yang bisa mengulang atau menelurusi object object yang iterable.
/**
 * Iterable Object (Object yang memungkinkan element elemen-nya melakukan looping)
 * 1. String
 * 2. Array
 * 3. Arguments / NodeList
 * 4. Typed Array
 * 5. Map
 * 6. Set
 * 7. User-defined Iterables
 */

// *Array
// const mhs = ["Luthfi Nur Ramadhan", "Rafli Hendarsyah", "Faizal Rizki Ramdani"];

// For biasa
// for(let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }


// ForEach
// mhs.forEach((m,i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// })


// For ... of
// for(const m of mhs) {
//     console.log(m);
// }

// for of secara default tidak memiliki index. Agar bisa mengetahui index-nya gunakan method entries().
// for(const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }



// *String
// const nama = "Luthfi Nur Ramadhan";

// for(const n of nama) {
//     console.log(n);
// }



// *NodeList
// const nama = document.querySelectorAll('.nama');

// forEach
// nama.forEach(n => console.log(n.innerHTML));

// For ... of
// for(const n of nama) {
//     console.log(n.innerHTML);
// }



// *Arguments
// function jumlahkanAngka() {
//     // Secara default argument yang dikirimkan ditangkap oleh parameter arguments.
//     // Arguments tidak bisa menggunakan reduce, forEach.
//     let jumlah = 0 ;
//     for(const angka of arguments) {
//         jumlah += angka;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1,2,3,4,5));






// ! For ... in
// For ... in perulangan hanya untuk enumerable.
// Enumerable (Property pada object yang dapat dilakukan looping).

// * Object
const mahasiswa = {
    nama: "Luthfi Nur Ramadhan",
    npm: 2142430,
    email: "luthfiramadhan.lr55@gmail.com",
    nilai: {
        Tugas: 90,
        Uts: 85,
        Uas: 87.5
    },
    alamat: "Jl.Madesa Rt.05 Rw.11 Blok.K No.21 Kel.Kopo Kec.Bojongloa Kaler 40233 Kota Bandung Jawa Barat"
}

for (const mhs in mahasiswa) {
    // skip di dalam object
    if (mhs === 'npm') {
        continue;
    }
    if (typeof mahasiswa[mhs] === 'object') {
        continue;
    }
    console.log(`${mhs}: ${mahasiswa[mhs]}`);
}

// for (const mhs in mahasiswa) {
//     // Cek apakah ada property dengan type Object
//     if (typeof mahasiswa[mhs] === 'object') {
//         console.log(`Nilai nilai yang diperoleh oleh mahasiswa dengan nama ${mahasiswa.nama}`);
//         for (const data in mahasiswa[mhs]) {
//             console.log(`${data}: ${mahasiswa[mhs][data]}`);
//         }
//     } else {
//         console.log(`${mhs}: ${mahasiswa[mhs]}`);
//     }
// }