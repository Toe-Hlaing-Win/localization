<?php

if (isset($_POST['upload'])) {
    //var_dump($_FILES['file']);
    echo count($_FILES['file']['name']);
    print_r($_FILES);
    for ($i=0; $i<count($_FILES['file']['name']);$i++) {
        echo $_FILES['file']['name'][$i];
        echo "<br />";
        $file_name= $_FILES['file']['name'][$i];
        $tmp_name = $_FILES['file']['tmp_name'][$i];
        move_uploaded_file($tmp_name, 'jsondata/'.$file_name);
    }
    header('Location: index.html');
}
?>