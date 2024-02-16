// * Tagged Templates
// Kita cukup memberikan nama function di depan string template literalsnya, yang nanti akan dianggap seolah olah sebagai parameter dari function-nya.
// const nama = "Luthfi Nur Ramadhan";
// const umur = 21;

// function coba(strings, ...args) {
//     // return strings;                        // ['Halo, Nama saya ', ' saya berusia ', ' tahun.', raw: Array(3)]

//     // Cara 1
//     // let result = '';
//     // strings.forEach((str, index) => {
//     //     result += `${str}${args[index] || ''}`;
//     // })
//     // return result;

//     // Cara 2
//     return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`, '');

// }

// // Tagged akan memecah tiap string di dalamnya, dipisahkan oleh expression.
// // Expressionnya masuk ke dalam parameter berikutnya
// const str = coba`Halo, Nama saya ${nama} saya berusia ${umur} tahun.`;
// console.log(str);

// /*
//     Karena dipisahkan oleh expression maka setiap expression akan masuk sebagai parameter terpisah.
//     Kita mungkin akan dihadapi kendala jika expressin-nya ada banyak.

//     Modern Javascript memiliki argument yang namanya RestParameter.
//     Dimana Rest Parameter akan menampung semua parameter yang ada di dalam template literals-nya.

//     Cara menulisnya dengan menambahkan ... dan diakhiri dengan nama parameternya
//     misalkan: ...args

//     maka dengan begitu expression ${nama} dan ${umur} akan masuk di dalam paramter args dalam bentuk array.

// */


// /*
//     Contoh penggunaan Tagged Templates :
//     1. Misalkan ketika kita melakukan pencarian, lalu hasilnya akan menampilkan highlight dari apa yang dicari.
//     2. Escaping HTML Tags (menghindari dari script yang tidak diinginkan)
//     3. Translation & Internationalization (alih bahasa dari website)
//     4. Styled Components
//  */






// // * Tagged Templates
// const nama2 = "Luthfi Nur Ramadhan";
// const umur2 = 21;
// const email = "luthfiramadhan.lr55@gmail.com";

// function highlight(strings, ...args) {
//     return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${args[i] || ''}</span>`, '');
// }

// const str2 = highlight`Halo, Nama saya ${nama2} saya berusia ${umur2} tahun dan email saya ${email}.`;
// document.body.innerHTML = str2;







// TODO: Rewatch Tagged Templates
// Bentuk yang lebih kompleks dari template literals, yang memungkinkan kita membaca template literals melalui sebuah function.

// ! Kasus ke-1
// const nama = "Luthfi Nur Ramadhan" ;
// const usia = 21 ;

// Template Literals
    // const str = `Halo, Nama saya ${nama} saya berusia ${usia} tahun.` ;
    // console.log(str);

// Merubah Template Literals menjadi Tagged Templates, dengan memberikan nama function didepan stringnya.
// Yang nanti dimana template literals ini akan masuk sebagai parameter dari function tadi.

    // Secara default Tagged Templates itu akan masuk sebagai parameter / arguments dari function.
    // Jika kita buat nama parameter dan mengembalikan hasilnya. Kemungkinan akan muncul 3 element di dalam array
    // Tagged Templates akan memecah setiap string yang ada di dalamnya, dan dipisahkan oleh expression (Expression tidak masuk ke dalam strings).

    // Expression masuk sebagai parameter berikutnya misalkan (strings, nama, umur)
    // Kendala-nya jika kita tidak mengetahui ada berapa banyak expression-nya di dalam template literals-nya.

    // Modern Javascript memiliki sebuah argument yang namanya 'Rest Parameter' yang dapat menampung seluruh expression yang ada di dalam template literal
    // Rest Parameter = ...(namaVariabel)       contoh: ...values
// const nama = "Luthfi Nur Ramadhan" ;
// const usia = 21 ;

//     function coba(strings, ...values) {
//         let result = '' ;
//         strings.forEach((str, index) => {
//             result += `${str}${values[index] || ''}` ;
//         });
//         return result ;
//     }

//     const str = coba`Halo, Nama saya ${nama} saya berusia ${usia} tahun.` ;
//     console.log(str) ;


// ! Kasus ke-1 dengan menggunakan reduce
// const nama = "Luthfi Nur Ramadhan" ;
// const usia = 21 ;

//     function coba(strings, ...values) {
//         // Awalnya diberikan string kosong, untuk menghindari undefined.
//         return strings.reduce((result, str, index) => `${result}${str}${values[index] || ''}`, '') ;
//     }

//     const str = coba`Halo, Nama saya ${nama} saya berusia ${usia} tahun.` ;
//     console.log(str) ;


// ! Kasus ke-2
const nama = "Luthfi Nur Ramadhan" ;
const usia = 21 ;
const email = "luthfiramadhan.lr55@gmail.com" ;

    function highlight(strings, ...values) {
        return strings.reduce((result, str, index) => `${result}${str}<span class="hl">${values[index] || ''}</span>`, '') ;
    }

    const str = highlight`Halo, Nama saya ${nama} saya berusia ${usia} tahun, dan email saya adalah ${email}.` ;
    document.body.innerHTML = str;

/*
    Contoh penggunaan Tagged Templates :
    1. Misalkan ketika kita melakukan pencarian, lalu hasilnya akan menampilkan highlight dari apa yang dicari.
    2. Escaping HTML Tags (menghindari dari script yang tidak diinginkan)
    3. Translation & Internationalization (alih bahasa dari website)
    4. Styled Components
 */