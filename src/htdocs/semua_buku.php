<?php
    include_once("config.php");
    $result = mysqli_query($mysqli, "SELECT * FROM buku ORDER BY id DESC") or die ("Error in query insert");
    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    print json_encode($rows);
?>