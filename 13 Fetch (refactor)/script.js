// TODO: Fetch (refactor)
// Memperbaiki code fetch dari video ke 12 (cara sebelumnya)


// * Fetch
// const searchButton = document.querySelector('.search-button');

// // event handler
// searchButton.addEventListener('click', function() {
//     const inputKeyword = document.querySelector('.input-keyword');

//     fetch('http://www.omdbapi.com/?apikey=5be44a60&s=' + inputKeyword.value)            // Mengembalikan promise
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(movie => cards += showCards(movie));

//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             // ketika tombol detail di klik
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener('click', function() {
//                     const imdbID = this.dataset.imdbid;

//                     fetch('http://www.omdbapi.com/?apikey=5be44a60&i=' + imdbID)
//                         .then(response => response.json())
//                         .then(response => {
//                             console.log(response);
//                             const detailMovies = showDetailsMovie(response);

//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = detailMovies;
//                         })
//                 })
//             })
//         })
// })



// * Fetch (Refactor)
// Akan memberikan async & await untuk menandakan asynchronous pada function
// Tarik fetch ke dalam fungsi yang berbeda begitu pula dengan hasilnya.
// dengan cara ini maka akan menjalankan dengan cara synchronous. Karena ketika dimasukkan ke dalam variabel movies data getMovies belum didapatkan dan keburu ditampilkan oleh console.log()

// Ketika ketemu getMovies maka akan pending karena synchronous.
// Sebelumnya kita berikan 'await' sehingga dimana statusnya masih pending. Kita tunggu dulu sampe statusnya resolve, baru dimasukkan ke dalam variabel movies.

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function() {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
});


function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=5be44a60&s=' + keyword)            // Mengembalikan promise
        .then(response => response.json())
        .then(response => response.Search);
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(movie => cards += showCards(movie));

    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

// Kita tidak bisa dengan melakukan cara ini untuk menjalankan detailnya. Karena ini dijalankan saat pertama kali web dibuka sedangkan button ini adanya hanya ketika datanya sudah tampil
// const modalDetailButton = document.querySelector('.modal-detail-button');

// Kita akan menggunakan yang namanya 'event binding'.
// Ngasih event ke element yang awanya belum ada, dan ketika ada event nya akan bisa berjalan.

document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('modal-detail-button')) {      // akan menangkap element
        const imdbID = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbID);
        updateUIDetail(movieDetail);
    }
})

function getMovieDetail(imdbID) {
    return fetch('http://www.omdbapi.com/?apikey=5be44a60&i=' + imdbID)
        .then(response => response.json())
        .then(response => response);
}

function updateUIDetail(detailVideo) {
    const detailMovies = showDetailsMovie(detailVideo);

    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = detailMovies;
}


function showCards(movie) {
    return `<div class="col-md-4 my-3">
        <div class="card">
            <img src="${movie.Poster}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Detail</a>
            </div>
        </div>
    </div>`;
}

function showDetailsMovie(dm) {
    return `<div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <img src="${dm.Poster}" alt="" class="img-fluid">
            </div>
            <div class="col-md">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h4>Title : ${dm.Title}</h4></li>
                    <li class="list-group-item"><strong>Released: ${dm.Released}</strong></li>
                    <li class="list-group-item"><strong>Genre : ${dm.Genre}</strong></li>
                    <li class="list-group-item"><strong>Writer : ${dm.Writer}</strong></li>
                    <li class="list-group-item"><strong>Rated : ${dm.Rated}</strong></li>
                </ul>
            </div>
        </div>
    </div>`;
}