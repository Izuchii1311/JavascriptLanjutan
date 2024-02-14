const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// *Filter, melakukan filterisasi
// Mencari angka >= 3
// for
    // const newAngka = [];
    // for (let i = 0; i <= angka.length; i++) {
    //     if (angka[i] >= 3) {
    //         newAngka.push(angka[i]);
    //     }
    // }
    // console.log(newAngka);

// Filter
    // const newAngka = angka.filter(a => a >= 3 );
    // console.log(newAngka);

// *Map, petakkan semua element pada array dengan fn yang baru
// kalikan semua angka dengan 2
    // const newAngka = angka.map(a => a * 2);
    // console.log(newAngka);

// *Reduce, melakukan seuatu terhadap seluruh element pada array.
// jumlahkan semua isi array
/*
    0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
    accumulator = hasil dari prosesnya.
    currentValue = element array yang sedang di loopingnya.
    nilaiAwal = nilaiAwal dimana nilainya menjadi angka yang dimasukkan, maka nilaiAwal tidak -1 tapi menjadi 5.
 */
    const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
    console.log(newAngka);


// *Method Chaining
// Cari angka > 5, hasilnya * 3, lalu jumlahkan
    const hasil = angka.filter(a => a > 5)
                        .map(a => a * 3)
                        .reduce((acc, currentVal) => acc + currentVal);
    console.log(hasil);