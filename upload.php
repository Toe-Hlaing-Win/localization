<?php

/**
 * to upload file at jsondata directory
 */

if (isset($_POST['upload'])) {
    //var_dump($_FILES['file']);
    echo count($_FILES['file']['name']);
    print_r($_FILES);
    for ($i=0; $i<count($_FILES['file']['name']);$i++) {
        echo $_FILES['file']['name'][$i];
        echo "<br />";
        print_r($_FILES['file']['name'][$i]);
        $file_name= $_FILES['file']['name'][$i];
        $tmp_name = $_FILES['file']['tmp_name'][$i];

        if (file_exists("jsondata/".$file_name)) {
            unlink("jsondata".$file_name);
            move_uploaded_file($tmp_name, 'jsondata/'.$file_name);
        } else {
            move_uploaded_file($tmp_name, 'jsondata/'.$file_name);
        }
    }
    header('Location: index.html');
}
