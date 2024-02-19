// TODO: Fetch
// * Apa itu Fetch ?
// fetch adalah sebuah API pada javascript modern yang tugasnya untuk mengambil data secara asynchronous atau AJAX XMLHttpRequest (Vanilla Javascript) atau juga menggunakan method ajax pada jQuery.

// Disini kita akan menggunakan fetch sehingga tidak akan menggunakan library eksternal seperti jQuery.

// * fetch()
// "Sebuah method pada API javascript untuk memanggil resources dari jaringan, dan mengembalikan promise yang selesai (fulfilled) ketika ada response yang tersedia."
/*
    fetch (resources, init);
        resources-nya bisa 2 :
            - URL (alamat dari sumber yang akan kita ambil)
            - Request Object (representasi permintaan sumber)
        init (opsional).
            konfigurasi tambahan pada sebuah request berbentuk object.
                - method    (default: GET)
                - headers
                - body
                - mode
                - cache
                - referrer
                - referrerPolicy
                - integrity
                - keepalive
                - signal

        Response, hasil dari fetch.
            hasilnya akan berupa promise, di dalamnya ada 2 :
                - property, property yang bisa digunakan :
                    - headers
                    - ok
                    - redirected
                    - status
                    - statusText
                    - type
                    - url
                    - body

                - method, method yang bisa digunakan :
                    - clone()
                    - error()
                    - redirect()
                    - blob()
                    - formData()
                    - json()
                    - text()
*/






// * Search AJAX jQuery
// $('.search-button').on('click', function() {

//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=5be44a60&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(movie => {
//                 cards += showCards(movie);
//             })

//             $('.movie-container').html(cards);

//             $('.modal-detail-button').on('click', function() {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=5be44a60&i=' + $(this).data('imdbid'),
//                     success: dm => {
//                         // console.log('http://www.omdbapi.com/?i=tt3896198&apikey=5be44a60&i=' + $(this).data('imdbid'))
//                         const movieDetails = showDetailsMovie(dm);

//                         $('.modal-body').html(movieDetails);
//                     },
//                     error: e => {
//                         console.log(e.responseText);
//                     }
//                 })

//             })
//         },
//         error: e => {
//             console.log(e.responseText);
//         }
//     })
// })


// * Fetch
const searchButton = document.querySelector('.search-button');

// event handler
searchButton.addEventListener('click', function() {
    const inputKeyword = document.querySelector('.input-keyword');

    fetch('http://www.omdbapi.com/?apikey=5be44a60&s=' + inputKeyword.value)            // Mengembalikan promise
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';
            movies.forEach(movie => cards += showCards(movie));

            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;

            // ketika tombol detail di klik
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function() {
                    const imdbID = this.dataset.imdbid;

                    fetch('http://www.omdbapi.com/?apikey=5be44a60&i=' + imdbID)
                        .then(response => response.json())
                        .then(response => {
                            console.log(response);
                            const detailMovies = showDetailsMovie(response);

                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = detailMovies;
                        })
                })
            })
        })
})


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