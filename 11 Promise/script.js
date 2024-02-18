// TODO: Promise
// Sebuah solusi untuk menangani yang namanya 'callback hell'.

// *AJAX menggunakan jQuery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=5be44a60&s=attack on titan',
//     success: movies => console.log(movies),
// })

// *AJAX menggunakan vanilla Javascript
// const xhr = new XMLHttpRequest() ;
// xhr.onreadystatechange = function() {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             // data berupa text parsing terlebih dahulu ke JSON
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=5be44a60&s=attack on titan');
// xhr.send();

// *Menggunakan fetch
// fetch('http://www.omdbapi.com/?apikey=5be44a60&s=attack on titan')
//     .then(response => response.json())
//     .then(response => console.log(response));



// fetch mengembalikan promise
// *Promise
/*
    Apa itu Promise?
    adalah sebuah object yang merepresentasikan keberhasilan / kegagalan dari sebuah event yang asynchronous yang akan terjadi di masa yang akan datang.

    Janji (terpenuhi / ingkar janji)
    State (fulfilled / rejected / pending(waktu tunggu janjinya terpenuhi atau tidak) )

    Untuk menjalankan ini ada 3 fungsi callback yang harus diingat, yaitu :
    callback (resolve / reject / finally)

    aksi(
        ketika janji-nya terpenuhi disebut dengan   = then      -> akan menjalankan resolve
        jika janjinya tidak terpenuhi               = catch     -> akan menjalankan reject
                                                    = finally   -> biasanya digunakan untuk animasi loading.
    )

    Promise dilakukan biasanya ketika kita mau melakukan request ke API.
*/

// *Contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati');
//     } else {
//         reject('Ingkar janji');
//     }
// });

// janji1
//     .then(response => console.log('OK, ' + response))
//     .catch(response => console.log('NOT OK, ' + response))

// *Contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati tapi setelah beberapa waktu');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati dalam waktu lama');
//         })
//     }
// })

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('Selesai Menunggu'))
//     .then(response => console.log('OK, ' + response))
//     .catch(response => console.log('NOT OK, ' + response))
// console.log('selesai');



// *Di dalam promise ada method yang nama-nya all
// Promise.all()
// Misalkan kita melakukan connect ke dalam banyak API secara bersamaan

const anime = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                judul: 'Fate Series',
                studio: 'UFOTABLE',
                genre: 'Adventure, Action, Supranatural'
            }
        ]);
    }, 1000)
});

const liveAction = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                judul: 'Attack On Titan [Live Action]',
                studio: 'Machakuri',
                genre: 'Action, Adventure, Drama'
            }
        ])
    }, 500)
});

// Menjalankan 1 per 1
// anime.then(response => console.log(response));
// liveAction.then(response => console.log(response));

// Menjalankan semuanya sekaligus
Promise.all([anime, liveAction])
    // .then(response => console.log(response));            // Array dalam Array
    .then(response => {
        const [anime, liveAction] = response;
        console.log(anime);
        console.log(liveAction);
    })