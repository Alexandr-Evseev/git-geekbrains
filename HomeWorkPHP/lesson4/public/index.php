<?php
header("Content-type: text/html; charset=utf-8");

include __DIR__ . '/../config/main.php';
include ENGINE_DIR . "render.php";

//include_once "render.php";
//require "render1.php";
//require_once "render.php";

touch("log.txt");
/*for($i = 2; $i < 10; $i++){
    fputs($f, date("H:i:d") . " Message {$i}\n");
}*/

/*
$f = fopen("log.txt", "a+");
while($row = fgets($f)){
    var_dump($row);
}
fclose($f);*/

//echo file_get_contents("http://yandex.ru");
/*
if($dir = opendir(".")){
    while ($file = readdir()){
        if(is_dir($file)){
            echo "<b>{$file}</b><br>";
        }else{
            echo "{$file}<br>";
        }
    }
    closedir($dir);
}*/


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(isset($_FILES['file'])){
        if(!file_exists(UPLOADS_DIR)){
            mkdir(UPLOADS_DIR);
        }
        $filename = UPLOADS_DIR . $_FILES['file']['name'];
        if(file_exists($filename)){
            $filename .= uniqid();
        }
        move_uploaded_file($_FILES['file']['tmp_name'], $filename );
    }

}
?>
<form action="" enctype="multipart/form-data" method="post">
    <input type="file" name = 'file'>
    <input type="submit">
</form>



