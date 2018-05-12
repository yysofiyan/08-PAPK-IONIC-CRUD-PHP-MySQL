<?php
    $databaseHost = 'localhost';
    $databaseName = 'sekolah';
    $databaseUsername = 'root';
    $databasePassword = 'root';
     
    $mysqli = mysqli_connect($databaseHost, $databaseUsername, $databasePassword, $databaseName); 
    if (!$mysqli) {
        die("Koneksi dengan MySQL gagal, Periksa config.php");
    }
?>