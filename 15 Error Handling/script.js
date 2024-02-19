// TODO: Error Handling
// *Error Handling: Promise
// .then()          -- resolve
// .catch()         -- reject

// *Error Handling: Async Await
// try              -- resolve
// catch()          -- reject

// *fetch() ?
// Ketika kita menggunakan fetch error yang ditangkap itu adalah error yang ada di dalam network-nya (url).
// Jadi ketika error di inputannya karena inputannya kosong atau datanya salah, itu sebenarnya bukan error dari fetch tapi error dari browser. Karena ketika ingin menjalankan function UpdateUI parameter moviesnya kosong.

// fetch hanya akan gagal ketika networknya error.
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function() {
    try {
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        updateUI(movies);
    } catch(error) {
        // console.log(error);
        alert(error);
    }
});

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=5be44a60&s=' + keyword)
        .then(response => {
            // cek response
            // console.log(response)
            if(response.status != 200) {
                // jika responsenya tidak 200 kita akan buat error dan akan dilempar ke catch menggunakan keyword throw new Error()
                throw new Error(response.statusText);
            }
            return response.json()
        })
        // nah, kita cek lagi api key nya sudah aman tidak ?
        .then(response => {
            // cek response
            // console.log(response)
            if(response.Response === "False" ) {
                throw new Error(response.Error);
            }
            return response.Search
        });
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(movie => cards += showCards(movie));

    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

// Event Binding
document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('modal-detail-button')) {
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