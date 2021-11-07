function searchMovies() {
  $('#movie-list').html('') //ketika mencari film baru maka tampilan film lama akan hilang/kosong

  $.ajax({
    type: "get",
    url: "http://www.omdbapi.com",
    dataType: "json",
    data: {
      'apikey' : '8de2b619',
      's' : $('#input-form').val() //diambil dari form id = 'input-form'
    },
    success: function (hasil) {
      if(hasil.Response == "True"){
        let movies = hasil.Search

        $.each(movies, function (i, data) {  
          $('#movie-list').append(`
            <div class='col-md-4'>
              <div class="card mb-3" style="width: 18rem;">
                <img src="`+data.Poster+`" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">`+data.Title+`</h5>
                  <h5 class="card-title">`+data.Year+`</h5>
                  <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID +`">See Detail</a>
                </div>
              </div>
            <div>
          `)
        });

        $('#input-form').val('')
      }else{
        $('#movie-list').append(`
          <div class='col-md-8'>
            <h1 class='text-center'>`+ hasil.Error +`</h1>
          </div>
        `)
      }
    }
  });
}

$('#search-button').on('click', function(){ //ketika tombol search di klik jalankan function
  searchMovies()
})

$('#input-form').on('keyup', function (e) {
  if(e.keyCode === 13){
    searchMovies()
  }
})

// detail movie

$('#movie-list').on('click', '.see-detail', function(){ //cari id movie-list lalu ketika di klik see0detail jalankan function
  $.ajax({
    type: "get",
    url: "http://www.omdbapi.com",
    dataType: "json",
    data: {
      'apikey' : '8de2b619',
      'i' : $(this).data('id')
    },
    success: function (movie) {
      if(movie.Response === "True"){
        // ubah isi .modal-body menjadi
        $('.modal-body').html(` 
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <img src="`+movie.Poster+`">
            </div>
            <div class="col-md-8">
              <ul class="list-group">
                <li class="list-group-item"><h3>`+movie.Title+`</h3></li>
                <li class="list-group-item">Year : `+movie.Year+`</li>
                <li class="list-group-item">Released : `+movie.Released+`</li>
                <li class="list-group-item">Genre : `+movie.Genre+`</li>
                <li class="list-group-item">Director : `+movie.Director+`</li>
                <li class="list-group-item">Writer : `+movie.Writer+`</li>
                <li class="list-group-item">Actors : `+movie.Actors+`</li>
                <li class="list-group-item">Plot : `+movie.Plot+`</li>
                <li class="list-group-item">Awards : `+movie.Awards+`</li>
                <li class="list-group-item">Ratings : `+movie.Ratings[0].Value+`</li>
                </ul>
            </div>
          </div>
        </div>
      `)
      }
      
    }
  });
})

