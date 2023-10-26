<?php
    $x = $_GET['size'];
    echo"<table border=1>";
    echo"<tr><td></td>";
    for ($i = 1; $i <= $x; $i++){
        echo"<td>$i</td>";
    }
    echo"</tr>";
    for ($i = 1; $i <= $x; $i++){
        echo"<tr>";
        echo"<td>$i</td>";
        for ($j = 1; $j <= $x; $j++){
            $result = $i * $j;
            echo"<td>$result</td>";
        }
        echo"</tr>";
    }
    echo"</table>";
?>