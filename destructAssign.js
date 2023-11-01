// *Destructuring Assignment / Variabel

// *Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Luthfi'];

// // Jika di skip tidak perlu diberikan nama variabelnya, tapi harus tetap memiliki koma.
// const [salam, , , nama] = perkenalan;
// console.log(`desturcturing array ${salam}`);         // Halo
// console.log(`destructuring array ${nama}`);          // Luthfi


    // *swap items
    // let a = 1;
    // let b = 2;

    // syntax destructuring bisa digunakan untuk menukar variabel.
    // [a, b] = [b, a];
    // console.log(`swap item dengan destructuring ${a}`);             // a = 2 b = 1


    // *return value dari function
    // function coba() {
    //     return [10,5];
    // }

    // const [c, d] = coba();
    // console.log(`return value function dengan destructuring ${c}`);     // 10


    // *rest parameter
    // jika membongkarnya banyak dan tidak mengetahui akan ada berapa element
    // const [e, ...values] = [1, 2, 3, 4, 5];
    // console.log(e);         // 1
    // console.log(values);    // [2, 3, 4, 5]


// *Destructuring object
    // harus sama dengan nama property objectnya
    // const mhs = {
    //     nama: 'Luthfi Nur Ramadhan',
    //     umur: 21,
    // }

    // const {nama, umur} = mhs;
    // console.log(nama);          // Luthfi Nur Ramadhan
    // console.log(umur);          // 21


    // *Assignment tanpa deklarasi object
    // ({nama, umur} = {
    //     nama: "Luthfi Nur Ramadhan",
    //     umur: 21
    // });
    // console.log(nama);             // Luthfi Nur Ramadhan
    // console.log(umur);              // 21


    // *Assignment ke variabel baru
    // const mhs = {
    //     nama: 'Luthfi Nur Ramadhan',
    //     umur: 21,
    // }

    // const {nama: n, umur: u} = mhs;
    // console.log(n);                 // Luthfi Nur Ramadhan
    // console.log(u);                 // 21


    // *Default Value
    // const mhs = {
    //     nama: 'Luthfi Nur Ramadhan',
    //     umur: 21,
    // }

    // const {nama, umur, email = 'email@default.com'} = mhs;
    // console.log(email);               // email@default.com


    // *Memberi nilai default dan assignt ke variabel baru.
    // const mhs = {
    //     nama: 'Luthfi Nur Ramadhan',
    //     umur: 21,
    //     email: 'luthfiramadhan.lr55@gmail.com'
    // }

    // const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
    // console.log(n);
    // console.log(u);
    // console.log(e);


    // *rest parameter
    // const mhs = {
    //     nama: 'Luthfi Nur Ramadhan',
    //     umur: 21,
    //     email: 'luthfiramadhan.lr55@gmail.com'
    // }

    // const {nama: n, ...values} = mhs;
    // console.log(n);             // Luthfi Nur Ramadhan
    // console.log(values);        // {umur: 21, email: luthfiramadhan.lr55@gmail.com}


    // *Mengambil field pada object, setelah dikirim sebagai parameter untuk function.
    // const mhs = {
    //     id: 123,
    //     nama: 'Luthfi Nur Ramadhan',
    //     umur: 21,
    //     email: 'luthfiramadhan.lr55@gmail.com'
    // }

    // // mengambil hanya id nya saja, sehingga yang lainnya diabaikan
    // function getIdMhs({id}) {
    //     return id;
    // }

    // console.log(getIdMhs());



// *Destructuring Function Values
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// Cara manual
// const kali = kalkulasi(2, 3)[2];
// console.log(kali);          // 6
// const jumlah = kalkulasi(2, 3)[0];
// console.log(jumlah);

// Cara destruction 1
// const [jumlah, , kali, ] = kalkulasi(2,3);
// console.log(kali);              // 6
// console.log(jumlah);

// Cara destructuring 2
// destructuring element urutannya harus benar
// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(kali)           // 6

// Cara destructuring 3
// jika element urutannya tidak berpengaruh maka jangan array tapi object
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// }
// // kita bisa menyimpan urutannya secara bebas
// const {bagi, tambah, kali = 'Perkalian tidak ada', kurang: kur} = kalkulasi(2,3);
// console.log(kali);      // 6



// *Destructuring Function Arguments
const mhs1 = {
    nama: 'Luthfi Nur Ramadhan',
    umur: 21,
    email: 'luthfiramadhan.lr55@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75,
    },
};

    // *Cara 1 - destructuring biasa
    // function cetakMhs(nama, umur, email) {
    //     return `Halo, nama saya ${nama}, saya berumur ${umur}, email saya ${email}`;
    // }

    // console.log(cetakMhs(mhs1.nama, mhs1.umur, mhs1.email));

    // Cara 2
    // function cetakMhs(mhs) {
    //     // dipecah valuenya di return
    //     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur}, email saya ${mhs.email}`;
    // }

    // console.log(cetakMhs(mhs1));

    // *Cara 2 dengan destructuring argument
    // function cetakMhs({nama, umur, email}) {
    //     return `Halo, nama saya ${nama}, saya berumur ${umur}, email saya ${email}`;
    // }

    // console.log(cetakMhs(mhs1));


    // Object kompleks
    function cetakMhs({nama, umur, email, nilai: {tugas, uts, uas}}) {
        return `Halo, nama saya ${nama}, saya berumur ${umur}, email saya ${email} dan nilai uas saya ${uas}`;
    }

    console.log(cetakMhs(mhs1));