<?php 

$data = file_get_contents('data/pizza.json');
$menu = json_decode($data,true);
$menu = $menu["menu"];
// echo $menu[0]["nama"];

?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>WPU Huts!</title>
  </head>
  <body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <img src="img/logo.png" alt="" width="130">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav fw-bold">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">All Menu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Pizza</a>
              </li>
            </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-2">
      <p class="fs-2">All Menu</p>
      <div class="row">
      <?php foreach($menu as $row) : ?>
        <div class="col-md-4">
          <div class="card">
            <img src="img/menu/<?= $row["gambar"] ?>" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title"><?= $row["nama"] ?></h5>
              <p class="card-text"><?= $row["deskripsi"] ?></p>
              <h5 class="card-title">Rp. <?= number_format($row["harga"]) ?>,-</h5>
              <a href="#" class="btn btn-primary">Pesan Sekarang</a>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
      </div>
    </div>
    <!-- Optional JavaScript; choose one of the two! -->
    
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>