<?php 

$data = file_get_contents('coba.json');
// $mahasiswa = json_decode($data); //merubah jadi object
$mahasiswa = json_decode($data,true); // merubah jadi array

var_dump($mahasiswa);
// var_dump($mahasiswa[0]["pembimbing"]["pembimbing1"]);

?>