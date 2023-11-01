// *For Of
    // *Looping Array
    // const mhs = ['Luthfi', 'Hutao', 'Izuchii'];

    // for biasa
    // for(let i = 0; i < mhs.length; i++) {
    //     console.log(mhs[i]);        // Luthfi   Hutao   Izuchii
    // }

    // forEach - khusus untuk array
    // mhs.forEach(m => console.log(m));
    // mhs.forEach((m, index) => console.log(`${m} adalah mahasiswa ke-${index + 1}`));

    // for of
    // representasikan menjadi variabel
    // secara default tidak memiliki index
    // for(const m of mhs) {
    //     console.log(m);     // Luthfi   Hutao   Izuchii
    // }
    // for(const [index, m] of mhs.entries()) {
    //     console.log(`${m} adalah mahasiswa ke-${index + 1}`);
    // }


// *Looping String
// const nama = "Luthfi Nur Ramadhan";
// for(const n of nama) {
//     console.log(n)          // akan melooping tiap tiap karakternya
// }


// *NodeList
// const nama = document.querySelectorAll('.nama');

// // dengan cara forEach
// nama.forEach(n => console.log(n.textContent));

// // dengan cara for of
// // tidak perlu menggunakan variabel awal karena nodeList sudah termasuk iterables
// for(n of nama) {
//     console.log(n.innerHTML);
// }


// jika menggunakan reduce dan forEach tidak akan bisa karena tidak berbentuk array tetapi arguments.
// jika tidak diberikan argument maka akan ditangkap oleh arguments.
// *Arguments
// function jumlahkanAngka() {
//     let jumlah = 0;
//     for(a of arguments) {
//         jumlah +=a;
//     }
//     return jumlah
// }

// console.log(jumlahkanAngka(1,2,3,4,5));





// *For in
const mhs = {
    nama: "Luthfi Nur Ramadhan",
    umur: 21,
    email: 'luthfiramadhan.lr55@gmail.com',
};

for (m in mhs) {
    console.log(m);             // mengembalikan enumerables-nya yaitu : nama, umur, email
    console.log(mhs[m]);        // mengembalikan isinya-nya yaitu : Luthfi nur Ramadhan, 21, luthfiramadhan.lr55@...
}