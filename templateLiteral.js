// *Template Literals / Template String
// const nama = "Luthfi Nur Ramadhan";
// const usia = 30;
// console.log(`Halo nama saya ${nama}, dan umur saya ${usia} tahun`);

// *Embeded Expression
// console.log(`${1+1}`);
// console.log(`${alert('Halo.')}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);
// Ternary dan function merupakan expression

// *HTML Fragments
// const mhs = {
//     nama: "Luthfi Nur Ramadhan",
//     umur: 21,
//     npm: "2142430",
//     email: "luthfiramadhan.lr55@gmail.com"
// };
// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="npm">${mhs.npm}</span>
// </div>`;
// console.log(el);



// *Penerapan Template Literals HTML Fragment pada kasus yang lebih nyata.
// *Looping
// const mhs = [
//     {
//         nama: "Luthfi Nur Ramadhan",
//         email: "luthfiramadhan.lr55@gmail.com"
//     },
//     {
//         nama: "Izuchii",
//         email: "izuchii1311@gmail.com"
//     },
//     {
//         nama: "Hutao",
//         email: "who_tao@gmail.com"
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`

// *Conditional
// const lagu = {
//     judul: "Tak segampang itu",
//     penyanyi: "Anggi marito",
//     feat: "Luthfi Nur Ramadhan"
// }

// const el = `<div class="mhs">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;

// *Nested
// const mhs = {
//     nama: "Luthfi Nur Ramadhan",
//     semester: 5,
//     mataKuliah: [
//         'Security Fundamental',
//         'Incident Response & Digital Forensik',
//         'Cryptography',
//         'Research Method',
//         'Mobile & Cloud Security',
//         'Penetration Testing'
//     ]
// }

// function cetakMataKuliah(mataKuliah) {
//     return `<ol>
//         ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>`;
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester">Semester : ${mhs.semester}</span>
//     <h4>Mata Kuliah</h4>
//     ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = el;



// *Tagged Templates
// const nama = "Luthfi Nur Ramadhan";
// const umur = 21;

// function coba(strings, ...values) {
//     // Cara 1
//     // let result = '';
//     // strings.forEach((str, index) => {
//     //     // string akan mengembalikan nilai yang sama dengan lebih dari 1.
//     //     result += `${str}${values[index] || ''}`;
//     // });

//     // Cara 2 dengan reduce
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// // akan menangkap tiap tiap stringnya yang dipisahkan oleh expression. expressionnya akan masuk ke parameter function berikutnya
// // kita tidakk mungkin tahu ada berapa expression di dalam template literalnya, maka kita tidak akan mengetahui berapa banyak parameter yang akan digunakan.
// // dengan modern javascript itu punya sebuah argument 'rest parameter' yang bisa menampung seluruh rest expression yang ada di dalam template literals dengan menuliskan ...(namanya)

// const str = coba`Halo nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// Kenapa kita menggunakan tag templates padahal bisa menuliskan stringnya secara langsung.
// Kalo misalkan ingin menampilkan sebuah string hasil pencarian berdasarkan keyword tertentu misalkan 'nama'.
// Kalian pengen tampil hasil pencariannya dengan 'nama' yang kalian masukkan itu sudah ada highlightnya sehingga orang jika melihat dimudahkan.



// *Highlight
const nama = "Luthfi Nur Ramadhan";
const umur = 21;
const email = "luthfiramadhan.lr55@gmail.com"

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="highlight">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo nama saya ${nama}, saya ${umur} tahun dan email saya adalah ${email}.`;
document.body.innerHTML = str;


// Penggunaan lain ?
// Escaping HTML Tag / sanitasi html tag, untuk menghindari adanya script atau karakter yang tidak diinginkan.
// Translation & Internalization / alih bahasa dari website
// Styled Components