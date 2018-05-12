<?php
    include_once("config.php");
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $judul = $_POST["judul"];
        $penerbit = $_POST["penerbit"];
        $pengarang = $_POST["pengarang"];
        $result = mysqli_query($mysqli, "INSERT INTO buku (judul, penerbit, pengarang) VALUES ('$judul','$penerbit','$pengarang')") or die ("Error query insert. ".mysql_error());
        echo(json_encode(["message"=> "buku berhasil ditambahkan"]));
    } else {
        print_r(json_encode(["message"=> "requuest harus post"]));
    }
?>
