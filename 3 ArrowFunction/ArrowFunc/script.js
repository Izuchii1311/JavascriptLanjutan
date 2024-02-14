// * Function declaration
    // function tampilAlert(nama) {
    //     alert(`Halo, ${nama}`);
    // }
    // tampilAlert("Izuchii");


// * Function Expression (Anonnymouse Function)
    // let tampilAlert = function(nama) {
    //     alert(`Halo, ${nama}`);
    // }
    // tampilAlert("Izuchii");


// TODO: Arrow Function
// *Arrow Function, adalah bentuk lain yang lebih ringkas dari function expression. -Mozilla

// * Arrow Function
    // let tampilAlert = (nama) => {
    //     alert(`Halo, ${nama}`);
    // }
    // tampilAlert("Izuchii");

// keyword function-nya hilang, () digunakan untuk menyimpan argument, dan => isi dari functionnya.

// *parameter 1
// (nama) bisa saja tidak menggunakan (). Tapi jika parameternya 2 harus dibungkus menggunakan ().
    // let tampilAlert = nama => { return `Halo, ${nama}`; }
    // console.log(tampilAlert("Izuchii"));


// *implisit return
// jika isinya hanya return kita bisa hapus return dan hilangkan {}.
    // let tampilAlert = nama => `Halo, ${nama}`;
    // console.log(tampilAlert("Izuchii"));


// *tampa parameter
// jika tidak ada parameter kita harus menambahkan ()
    // let tampilNama = () => `Halo Luthfi Nur Ramadhan`;
    // console.log(tampilNama());


// *Menggunakan Fn Biasa
// let mahasiswa = ["Izuchii", "Hutao", "Luthfi"];
let jumlahHuruf = mahasiswa.map(function(nama) {
    return nama.length;
});
console.log(jumlahHuruf);


let mahasiswa = ["Izuchii", "Hutao", "Luthfi"];

// *Menggunakan Arrow Function [array]
let jumlahHuruf2 = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf2)

// *Menggunakan Arrow Function [object]
let jumlahHuruf3 = mahasiswa.map(nama => (
        {
            nama: nama,
            jumlahHuruf: nama.length
        }
    ));
console.table(jumlahHuruf3);