// *String Literal
const nama = "Luthfi Nur Ramadhan";
const umur = 21;
console.log(`Halo, nama saya ${nama} saya berusia ${umur}`);

// Embedded expression
console.log(`${1 + 1}`);
console.log(`${alert("Halo")}`);

// Expression Ternary
const x = 10;
console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);

// HTML Fragment
const mhs = {
    nama: "Luthfi Nur Ramadhan",
    umur: 21,
    npm: 2142430,
    email: "luthfiramadhan.lr55@gmail.com"
};
let body = document.body.innerHTML = `<div>
                                        <ul>
                                            <li>Nama : ${mhs.nama}</li>
                                            <li>Umur : ${mhs.umur}</li>
                                            <li>NPM : ${mhs.npm}</li>
                                            <li>Email : ${mhs.email}</li>
                                        </ul>
                                    </div>`;