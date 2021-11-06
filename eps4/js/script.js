function tampilDaftarMenu() {
  $.getJSON('data/pizza.json', function (hasil){
    let menu = hasil.menu
    $.each(menu, function (i, data) {  // beri funtion setiap element
      // append = beri apapun di akhir
       $("#daftar-menu").append('<div class="col-md-4"><div class="card"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+data.harga+',-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>')
    });
  });
}

tampilDaftarMenu()

$('.nav-link').on('click', function () { //cari class nav-link ketika di klik jalankan fungsi
  $('.nav-link').removeClass('active'); //hapus class active
  $(this).addClass('active'); //tambahkan class active untuk link yang yang dklik

  let kategori = $(this).html() //ambil html dari link yang di klik
  $('h1').html(kategori) //ubah html h1 dengan var kategori

  if(kategori == 'All Menu'){
    tampilDaftarMenu() //tampilkan jika yang di klik allmenu
    return;
  }

  $.getJSON('data/pizza.json', function (hasil) {
    let menu = hasil.menu
    let content = ''  
    
    $.each(menu, function (i, data) { 
       if( data.kategori == kategori.toLowerCase()){ //cari data yang sama dengan link
         content += '<div class="col-md-4"><div class="card"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+data.harga+',-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
       }
    });

    $('#daftar-menu').html(content) //lalu isi dengan var content
  });
})