<?php
    include_once("config.php");
    $id = $_POST["id"];
    $result = mysqli_query($mysqli, "DELETE from buku WHERE id='$id'") or die ("gagal query delete");
    echo(json_encode(["message"=> "buku berhasil di delete"]));
?>
