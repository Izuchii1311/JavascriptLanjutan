// Filter, Map, dan Reduce
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter angka >= 3

    // for
    // const newAngka = [];
    // for(let i = 0; i < angka.length; i ++) {
    //     if(angka[i] >= 3) {
    //         newAngka.push(angka[i]);
    //     }
    // }
    // console.log(newAngka);


    // filter()
    const newAngka = angka.filter(a => a >= 3);
    console.log("ini menggunakan filter " + newAngka);          // 8,9,4,3,9


    // map()
    // mengkalikan semua angka *2
    const newAngka2 = angka.map(a => a * 2);
    console.log("ini menggunakan map " + newAngka2);            // -2,16,18,2,8,-10,-8,6,4,18


    // reduce(accumulator, current value)
    // accumulator  : hasil dari proses, misalkan dijumlahkan
    // curentValue  : element array yang sedang dilooping
    // sebenarnya setelah currentValue, kita bisa menambahkan nilai awal.
    // menjumlahkan semua isinya
    const newAngka3 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, /*nilai awal*/);
    console.log("ini menggunakan reduce " + newAngka3);             // 26


    // Method chaining
    // kita bisa menggabungkan fungsi fungsi pada High Order Function dalam 1x eksekusi tidak perlu ke dalam variabel dahulu.

    // angka >= 5 * 3
    const hasil = angka.filter(a => a >= 5)
    .map(a => a * 3)                        /* 24, 27, 27 */
    .reduce((acc, cur) => acc  + cur);      /* 78 */
    console.log("ini mneggunakan method chaining " + hasil);
