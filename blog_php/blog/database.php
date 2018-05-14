<?php
/**
 * Created by PhpStorm.
 * User: Alexandr_Evseev
 * Date: 05.05.2018
 * Time: 16:57
 */

define('MYSQL_SERVER', 'localhost');
define('MYSQL_USER', 'id5678711_root');
define('MYSQL_PASSWORD', 'blog000phpblog000php');
define('MYSQL_DB', 'id5678711_blog000php');

function db_connect(){
    $link = mysqli_connect(MYSQL_SERVER, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB)
        or die("Error: ".mysqli_error($link));
    if(!mysqli_set_charset($link, "utf8")){
        printf("Error: ".mysqli_error($link));
    }
    return $link;
}
?>