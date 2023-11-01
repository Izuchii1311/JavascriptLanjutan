// *Spread Operators
    // Memecah iterables menjadi single elements.

    // const mhs = ['luthfi', 'hutao', 'izuchii'];
    // console.log(...mhs);

    // Kapan menggunakan Spread operator ?
    // *Menggabungkan 2 Array
    // const mhs = ['luthfi', 'hutao', 'izuchii'];
    // const dosen = ['gelar', 'dede', 'girindo'];
    // // const orang = mhs.concat(dosen);
    // const orang = [...mhs, 'izuna', ...dosen];
    // console.log(orang);

    // *Mengcopy nilai pada array
        // Sebenarnya ini bukan mengcopy karena jika kita merubah isi arraynya array yang di copy kannya juga ikut berubah.
        // const mhs = ['luthfi', 'hutao', 'izuchii'];
        // const mhs1 = mhs;
        // mhs1[0] = 'fajar';
        // console.log(mhs1);

        // result mhs = [fajar, hutao, izuchii] dan mhs1 = [fajar, hutao, izuchii]


        // const mhs = ['luthfi', 'hutao', 'izuchii'];
        // const mhs1 = [...mhs];
        // mhs1[0] = 'fajar';
        // console.log(mhs);

        // result mhs = [luthfi, hutao, izuchii] dan mhs1 = [fajar, hutao, izuchii]


    // *Merubah menjadi Array
        // const liMhs = document.querySelectorAll('li');
        // // cara 1
        // // const mhs = [];
        // // for(let i = 0; i <= liMhs.length, i++) {
        // //     mhs.push(liMhs[i].textContent);
        // // }

        // // cara 2
        // const mhs = [...liMhs].map(m => m.textContent);
        // console.log(mhs);


    // *Contoh Kasus
        const namas = document.querySelector('.namas');
        const huruf = [...namas.textContent].map(h => `<span>${h}</span>`).join('');
        namas.innerHTML = huruf;
        console.log(huruf);





// *Rest Parameter
function myFunc(...values) {
    // return values;
    // return Array.from(arguments);
    return [...arguments];
}

console.log(myFunc(1,2,3,4,5));


function jumlahkan(...angka) {
    // Cara 1
    // let total = 0;
    // for(const jum of angka) {
    //     total += jum;
    // }
    // return total;

    // Cara 2
    return angka.reduce((a, b) => a + b);
}

console.log(jumlahkan(1,2,3,4,5));


// array destructuring
const kel1 = ['Agus', 'Jajang', 'Endang', 'Toriq', 'Asep'];
const [ketua, wakil, ...anggota] = kel1;
console.log(wakil);

// Object destructuring
const team = {
    pm: 'Luthfi',
    frontEnd1: 'Agus',
    frontEnd2: 'Asep',
    backEnd: 'Fajar',
    ux: 'Rapli',
    devOps: 'Hari'
}

const {pm, ...sisa} = team;
console.log(sisa);


// Contoh kasus : filtering
function filterBy(tipe, ...values) {
    return values.filter(v => typeof v === tipe);
}

console.log(filterBy('number', 1, 2, 'Luthfi', false, 10, true, "Hutao"));
// console.log(filterBy('string', 1, 2, 'Luthfi', false, 10, true, "Hutao"));