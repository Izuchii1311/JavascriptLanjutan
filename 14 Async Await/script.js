// TODO: Async Await
// *Async [Definition]
// Asynchronous Function, "Sebuah function yang bekerja secara asynchronous (melalui even loop), yang menghasilkan (implisit) promise sebagai return value-nya, tapi cara penulisan code-nya menggunakan penulisan yangg synchronous (standard)." -MDNWebDocs
/*
    Asynchronous Function:
        > Fungsi yang berjalan secara asynchronous
        > Menghasilkan (implisit) promise
        > Cara penulisannya sama seperti synchronous function (function biasa)
*/

// Aynchronous Function, "Sebuah async function dapat memiliki keyword 'await' di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai."  -MDNWebDocs


// Contoh penggunaannya tanpa menggunakan fetch API

// Tanpa Async Await
// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000)
// });

// coba
//     .then(() => console.log(coba));


// Dengan Async
// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('selesai')
//         }, 2000)
//     });
// }

// async function cobaAsync() {
//     const coba = await cobaPromise();
//     console.log(coba);
// }

// cobaAsync();


// Contoh menerapkan error handling dalam Promise
// function cobaPromise() {
//     return new Promise((resolve, reject) => {
//         const waktu = 30000;
//         if(waktu <= 5000) {
//             setTimeout(() => {
//                 resolve('selesai')
//             }, 2000)
//         } else {
//             reject('terlalu lama');
//         }
//     });
// }

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba))


// Contoh menerapkan error handling dalam async await
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 30000;
        if(waktu <= 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, 2000)
        } else {
            reject('terlalu lama');
        }
    });
}

async function cobaAsync() {
    try {                                   // untuk resolve
        const coba = await cobaPromise();
        console.log(coba)
    } catch(error) {                             // untuk reject
        console.log(error)
    }
}

cobaAsync()