// TODO: Membuat Object dengan menggunakan Object.create()

// Membuat Object dengan menggunakan object literal
/*
    Kekurangan :
    - Tidak efektif untuk object yang banyak
*/


// Membuat Object dengan menggunakan function declaration
/*
    Kekurangan :
    - Jika melakukan instansiasi pada objectnya, 2 method didalam objectnya tetap dibuat. Meskipun tidak digunakan (Duplkasi).

    Ada cara untuk membuatnya lebih effektif yaitu dengan memisahkan methodnya ke dalam object baru.
    Jadi method di dalam function declaration dimasukkan ke dalam object baru (Object literal) yang hanya berisi method. Kemudian kita panggil methodnya di dalam function declaration.

    - Jika ada method baru di dalam objectnya kita harus mendaftarkannya ke dalam function declaration (mengelola 2 object).

    - Kita hanya butuh mahasiswa, tidak butuh object methodMahasiswa.


    Solusi :
    - Kita bisa menggunakan Object.create();
    cara ini sama dengan seperti konteks pewarisan.
    di dalam function declaration kita tidak lagi membuat object seprti ini.
    let mahasiswa = {} ;

    tetapi menjadi seperti berikut
    let mahasiswa = Object.create(methodMahasiswa);
*/