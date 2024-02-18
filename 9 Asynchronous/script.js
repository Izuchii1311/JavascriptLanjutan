// TODO: Asynchronous
/**
 * *Asynchronous Javascript
 * 1. Callback
 * 2. Promise
 * 3. Ajax
 * 4. Async & Await
 */

// * "Javascript is a single-threaded, non-blocking, asynchronous, and concurrent language."
/*
    Single Threaded / Thread adalah urutan eksekusi kode yang dapat dilakukan secara bebas / independen satu sama lain (Hanya bisa melakukan 1 hal dalam 1 waktu tertentu).
        Sedangkan Multi Threaded, pekerjaan eksekusi kode-nya dapat dilakukan oleh thread yang berbeda (Tugas-nya dibagi bagi).

    Blocking, ketika kita mempunyai 1 buah task, dan ketika dieksekusi membutuhkan waktu yang lama. (Kalo task 1 belum selesai maka tidak akan bisa ke task berikutnya).
        Non-Blocking, ketika kita mengerjakan 1 hal, walaupun task tersebut belum selesai kita bisa lanjut ke task berikutnya.

    Synchronous, dimana prosesnya dilakukan secara berurut / bertahap.
    Asynchronous (single threaded), menjalankan proses-nya secara bertahap, namun tidak menunggu 1 task hingga selesai, kemungkinan akan menjalankan task lainnya juga hingga task yang sudah dijalankannya berhasil. Ini disebut juga dengan 'Concurrency'.
    Asynchronous (multi threaded), menjalankan proses-nya secara bertahap namun bisa menjalankan banyak task di thread yang berbeda hingga program berhasil dijalankan dalam waktu tertentu. Ini disebut juga dengan 'Paralellism'.

    Kesimpulan:
    > Single vs Multi Thread
        lingkungan eksekusi "Task"
    > Blocking vs Non-Blocking
        teknik koding (IO related)
    > Synchronous vs Asynchronous
        teknik koding (HTTP Request related)
    > Concurrent vs Parallel
        lingkungan eksekusi "Task"

    Asynchronous Callback, ini bisa terjadi karena ada 'event loop'.
    Dengan contoh misalkan kita memanggil sebuah timing function 'setTimeout' dengan menerima parameternya berupa callback. Ini akan hilang dan masuk ke dalam event loop, maka akan menjalankan baris kode berikutnya (di skip).

    setTimeout itu akan masuk ke dalam 'Web API' dimana akan menangani Asynchronous callback kemudian akan menjalankan baris kode di dalamnya dan menyimpan hasil nya ke dalam Callback Queue. Hasil dari Callback Queue ini akan ditampilkan apabila baris yang sekarang sedang dijalankan sudah selesai. Callback ini akan seperti berupa antrian menjalankan kode-nya secara berurutan.

    "don't block the event loop!"
    Jangan sampai event loop-nya menumpuk :)
*/