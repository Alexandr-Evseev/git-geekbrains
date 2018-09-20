<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title> lesson 1 </title>
</head>
<body>
<p>

  <?php
  $X = "Яблоко";
  $Z = 265;
  echo '$X = ' . $X . "<br>", '$Z = ' . $Z;
  echo '<br>' . 'Меняем значения местами' . '<br>';
  $X .= $Z;
  $Z = str_replace($Z,'',$X);
  $X = str_replace($Z,'',$X);
  echo '$X = ' . $X . "<br>", '$Z = ' . $Z;
  ?>

  <br>
  //переадресация на другую страницу
  // header('Location:/index.php');

// разобраться с
  setcookie("test", "dfgddrfgdzfv");


  кодировка всегда по utf8 без BOM
  + обязательно отправлять заголовок с указанием контент тайп и чаhctn utf8

//var_dump
</p>
</body>
