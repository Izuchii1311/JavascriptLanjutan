// TODO: Spread Operator vs. Rest Parameter
// * direpresentasikan dengan ...

// *Spread Operator
// Memecah (expand / unpack) iterables menjadi single element.
/**
 * Iterable Object
 * 1. String
 * 2. Array
 * 3. Arguments / NodeList
 * 4. Typed Array
 * 5. Map
 * 6. Set
 * 7. User-defined Iterables
 */

// const mhs = ["Luthfi", "Rafli", "Faizal"];
// console.log(...mhs);         // Luthfi Rafli Faizal
// console.log(...mhs[0]);      // L u t h f i

/*
    Kapan kita menggunakan Spread Operator ??
    1. Ketika kita ingin menggabungkan 2 array dan bisa menyisipkan element array baru di dalam array.
    2. Mengcopy Nilai Pada Array
*/

// *Menggabungkan 2 Array
// const mhs = ["Luthfi Nur Ramadhan", "Rafli Hendarsyah", "Faizal Rizki Ramdani"];
// const dosen = ["Girindo Pringgo Digdo", "Gelar Aditya", "Dede Darsono"];

// const denganConcat = mhs.concat(dosen);

// // dengan menggunakan spread operator itu akan lebih fleksibel apabila kita ingin menambahkan element array baru.
// const denganSpread = [...mhs, "Hutao", ...dosen];

// console.log(...civitas);


// *Meng-copy nilai pada array
// Contoh 1
// const mhs = ["Luthfi Nur Ramadhan", "Rafli Hendarsyah", "Faizal Rizki Ramdani"];
// // Jika ditimpa maka mhs dengan index ke 1 akan ditimpa juga dengan "Hutao".
// const mahasiswa = mhs;
// mahasiswa[1] = "Hutao";

// // Dengan cara ini maka kita telah mengcopy array dari mhs, dan nilai dengan index tertentu diubah datanya.
// const mahasiswa = [...mhs];
// mahasiswa[1] = "Hutao";

// console.log(mahasiswa);


// Contoh 2
// const li = document.querySelectorAll('ul li');
// const data = [];

// for(let i = 0; i < li.length; i ++) {
//     data.push(li[i].textContent)
// }

// console.log(...data);


const li = document.querySelectorAll('ul li');
// karena li adalah nodeList maka kita ubah menjadi array dengan menggunakan spread operator.
const mhs = [...li].map(m => m.textContent);
console.log(mhs);


// Contoh 3
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(m => `<span>${m}</span>`).join('');
nama.innerHTML = huruf;