// Ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Memilih hanya "Javascript Lanjutan"
let jsLanjut = videos.filter(video => video.textContent.includes('Javascript Lanjutan'))
    // Ambil durasi video
    .map(item => item.dataset.duration)
    // Ubah durasi menjadi Int
    .map(waktu => {
        // 10:30 -> [10, 30]    split
        const parts = waktu.split(':').map(part => parseFloat(part));
        // Ubah durasi menit menjadi detik
        return (parts[0] * 60) + parts[1];
    })
    // Jumlahkan semua detiknya
    .reduce((total, detik) => total + detik);

// Ubah formatnya menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam *3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;

const jmlVideo = videos.filter(video => video.textContent.includes('Javascript Lanjutan')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} video.`;

console.log(jam);



/*
*node list beda dengan array sehingga tidak bisa kita berikan map, filter dan reduce.
*/