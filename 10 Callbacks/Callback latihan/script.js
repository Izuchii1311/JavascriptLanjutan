// Akan menggunakan OMDB API
/*
    http://www.omdbapi.com/?i=tt3896198&apikey=5be44a60
*/
// Menggunakan Bootstrap dan Jquery. Karena bootstrap memiliki jQuery tapi tidak bisa menggunakan AJAX.

// *Search
$('.search-button').on('click', function() {

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=5be44a60&s=' + $('.input-keyword').val(),
        success: results => {
            const movies = results.Search;
            let cards = '';
            movies.forEach(movie => {
                cards += showCards(movie);
            })

            $('.movie-container').html(cards);

            $('.modal-detail-button').on('click', function() {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=5be44a60&i=' + $(this).data('imdbid'),
                    success: dm => {
                        // console.log('http://www.omdbapi.com/?i=tt3896198&apikey=5be44a60&i=' + $(this).data('imdbid'))
                        const movieDetails = showDetailsMovie(dm);

                        $('.modal-body').html(movieDetails);
                    },
                    error: e => {
                        console.log(e.responseText);
                    }
                })

            })
        },
        error: e => {
            console.log(e.responseText);
        }
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
})