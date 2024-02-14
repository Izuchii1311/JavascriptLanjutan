// *Seleksi Video Javascript Lanjuan
// Ambil semua element video dengan property 'data-duration'
// Array.form() = merubah data yang ditangkap menjadi array.
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih yang di dalam textContent-nya terdapat text 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    .map(item => item.dataset.duration)                                 // Ambil durasi dari dataset
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));   // 10:30 -> [10,30]  split
        return (parts[0] * 60) + parts[1];                              // return durasi detik.
    })                                                                  // Ubah durasi menjadi float (jumlahkan)
    .reduce((total, detik) => total + detik);                           // jumlahkan semua detik

// Ubah Format menjadi Jam - Menit - Detik
const jam = Math.floor(jsLanjut / 3600);
    jsLanjut = jsLanjut - jam * 3600;                                   // Sisa detik
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Save di dalam DOM
const durasi = document.querySelector('.total-durasi');
    durasi.textContent = ` ${jam} jam, ${menit} menit, ${detik} detik. `;

// Total video
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const allvideo = videos.length;
const totalJmlVideo = document.querySelector('.jumlah-video');
    totalJmlVideo.textContent = ` ${jmlVideo} video (Javascript Lanjutan) dari total ${allvideo} video. `;