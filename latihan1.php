<?php 

// json encode untuk merubah array menjadi json,
// json decode untuk merubah json menjadi array
$dbh = new PDO('mysql:host=localhost;dbname=phpdasar','root','');
$db =$dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;

?>