// *Asychronous

// *10.1 Callback
    // *Synchronous Callback
    // Sebuah function yang parameternya function juga.

    // function halo(nama) {
    //     alert(`Halo, ${nama}`);
    // }

    // function tampilkanPesan(callback) {
    //     const nama = prompt('Masukkan Nama');
    //     callback(nama);
    // }

    // tampilkanPesan(nama => alert(`Halo, ${nama}`));


    // // Contoh 2
    // const mhs = [
    //     {
    //         nama: "Luthfi Nur Ramadhan",
    //         npm: "2142430",
    //         email: "luthfiramadhan.lr55@gmail.com",
    //         jurusan: "Teknik Informatika",
    //         idDosenWali: 1,
    //     },
    //     {
    //         nama: "Rafli Hendarsyah",
    //         npm: "2142433",
    //         email: "plihendarsyah2@gmail.com",
    //         jurusan: "Teknik Informatika",
    //         idDosenWali: 3,
    //     },
    //     {
    //         nama: "Fazar Siddiq Arrizal",
    //         npm: "2142427",
    //         email: "arrizal223@gmail.com",
    //         jurusan: "Teknik Informatika",
    //         idDosenWali: 2,
    //     },
    // ];

    // mhs.forEach(m => {
    //     for(let i = 0; i < 1000000; i++ ){
    //         let date = new Date();
    //     }
    //     console.log(m.nama)
    // });




    // *Asynchronous Callback
    // Vanilla Javascript Ajax
    // function getDataMahasiswa(url, success, error) {
    //     let xhr = new XMLHttpRequest();

    //     xhr.onreadystatechange = function() {
    //         // Ready
    //         if(xhr.readyState === 4) {
    //             if(xhr.status === 200) {
    //                 success(xhr.response);
    //             } else if (xhr.status === 404) {
    //                 error();
    //             }
    //         }
    //     }

    //     xhr.open('get', url);
    //     xhr.send();
    // }

    // console.log('mulai');
    // getDataMahasiswa('data/mahasiswa.json', result => {
    //     const mhs = JSON.parse(result);
    //     mhs.forEach(m => console.log(m.nama));
    // }, () => {

    // });
    // console.log('selesai');




    // Jquery Ajax
    console.log('mulai');
    $.ajax({
        url: 'data/mahasiswa.json',
        // Hasilnya sudah berupa object
        success: (hasil) => {
            hasil.forEach(m => console.log(m.nama));
        },
        error: (e) => {
            console.log(e.responseText);
        }
    })
    console.log('selesai');