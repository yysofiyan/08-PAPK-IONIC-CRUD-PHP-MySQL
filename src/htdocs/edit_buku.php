<?php
    include_once("config.php");
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!$_POST['id']) {
            echo "id diperlukan";
        } else {
            $id = $_POST['id'];
            $judul = $_POST['judul'];
            $penerbit = $_POST['penerbit'];
            $pengarang = $_POST['pengarang'];
            $result = mysqli_query($mysqli, "UPDATE buku SET judul='$judul', penerbit='$penerbit', pengarang='$pengarang' where id=$id") or die ("Error query insert. ".mysql_error());
            echo(json_encode(["message"=> "buku berhasil di update"]));
        }
    } else {
        print_r(json_encode(["message"=> "requuest harus post"]));
    }
?>
