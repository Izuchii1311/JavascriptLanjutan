// *Latihan Template Literals
// 1. HTML Fragments
// const mhs = {
//     nama: "Luthfi Nur Ramadhan",
//     umur: 21,
//     npm: 2142430,
//     email: "luthfiramadhan.lr55@gmail.com"
// };

// document.body.innerHTML =
//     `<div>
//         <ul>
//             <li>Nama : ${mhs.nama}</li>
//             <li>Umur : ${mhs.umur}</li>
//             <li>NPM : ${mhs.npm}</li>
//             <li>Email : ${mhs.email}</li>
//         </ul>
//     </div>`;


// 2. Looping
// const mhs = [
//     {
//         nama: "Luthfi Nur Ramadhan",
//         email: "luthfiramadhan.lr55@gmail.com"
//     },
//     {
//         nama: "Izuchii",
//         email: "izuchii@gmail.com"
//     },
//     {
//         nama: "Hutao",
//         email: "uwuthao@gmail.com"
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>Nama: ${m.nama}</li>
//         <li>Email: ${m.email}</li>
//     </ul>`).join('')}
// </div>`;

// document.body.innerHTML = el;


// 3. Conditionals - Ternary
// const lagu = {
//     judul: "Tak Segampang Itu",
//     penyanyi: "Anggi Marito",
//     feat: "Luthfi Nur Ramadhan"
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;

// document.body.innerHTML = el;


// 4. Nested HTML Fragments
const mhs = {
    nama: "Luthfi Nur Ramadhan",
    semester: 5,
    mataKuliah: [
        "Research Method",
        "Penetration Testing",
        "Mobile and Cloude Security",
        "Security Fundamental",
        "Cryptography",
        "Incident Response"
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `<ol>
                ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
            </ol>`;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span>Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;