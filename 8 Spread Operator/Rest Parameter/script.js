// TODO: Rest Parameter
// Menggunakan 'Rest Parameter' notasi-nya masih sama dengan menggunakan tanda ...

// *Rest Parameter
// Adalah sesuatu yang merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array. -MDNWebDocs

// di dalam function kita mempunyai parameter arguments yang berisi semua paramterer yang dikirimkan.
// function myFunc(a, b, ...myArgs) {
//     // return arguments;
//     return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));


// function jumlahkan(...angka) {
//     // Reduce
//     // return angka.reduce((hasil, nilai) => hasil + nilai, 0);

//     // For ... of
//     let jumlah = 0;
//     for(const nilai of angka) {
//         jumlah += nilai;
//     }
//     return jumlah
// }

// console.log(jumlahkan(1,2,3,4,5));



// *array destructuring
const kelompok1 = ["Hutao", "Izuchii", "Huohuo", "Sparkle", "Furina"];
const [ketua, wakilKetua, ...anggota] = kelompok1;
console.log(anggota);

// *object destructuring
const team = {
    pm: 'Luthfi Nur Ramadhan',
    frontEnd: 'Hutao',
    frontEnd2: 'Huohuo',
    backEnd: 'Sparkle',
    ux: "Furina",
    devOps: "Izuchii"
} ;
const {pm, ...myTeam} = team ;
console.log(myTeam) ;


// *filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1,2, "Izuchii", false, 10, true, "Hutao"));