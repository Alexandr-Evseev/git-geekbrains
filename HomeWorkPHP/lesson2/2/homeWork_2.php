<?php
header("Content-type: text/html; charset=utf-8");
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> lesson </title>
</head>
<body>
<p>
    5. *Используя только две переменные, поменяйте их значение местами.
    Например, если a = 10, b = 250, надо, чтобы получилось b = 10, a = 250.
    Дополнительные переменные использовать нельзя.
    <br><br>

    <?php
    $a = "Яблоко";
    $b = 250;
    echo '$a = ' . $a . "<br>", '$b = ' . $b;
    echo '<br> Меняем значения местами <br>';
    $a .= $b;
    $b = str_replace($b, '', $a);
    $a = str_replace($b, '', $a);
    echo '$a = ' . $a . "<br>", '$b = ' . $b;
    ?>

<hr>
<br>
1. Объявить две целочисленные переменные $a и $b и задать им произвольные начальные значения. Затем написать скрипт,
который работает по следующему принципу:

если $a и $b положительные, вывести их разность;
если $а и $b отрицательные, вывести их произведение;
если $а и $b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.

<br><br>
<?php
$aa = rand(-100, 100);
$bb = rand(-100, 100);
$cc = null;

//if ($aa >= 0 && $bb >= 0) {
//    $cc = $aa - $bb;
//} elseif ($aa < 0 && $bb < 0){
//    $cc = $aa * $bb;
//} else {
//    $cc = $aa + $bb;
//};
//echo $aa." ",$bb." ",$cc;

if ($aa >= 0 XOR $bb >= 0) {
    $cc = $aa - $bb;
} elseif ($aa < 0) {
    $cc = $aa * $bb;
} else {
    $cc = $aa - $bb;
}
echo $aa . " ", $bb . " ", $cc;
?>

<hr>
<br>
3. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
<br><br>
<?php

?>

<hr>
<br>
4. Реализовать функцию с тремя параметрами: function mathOperation($arg1, $arg2, $operation), где $arg1, $arg2 –
значения аргументов, $operation – строка с названием операции. В зависимости от переданного значения операции выполнить
одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
<br><br>
<?php

?>

<hr>
<br>
6. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power($val, $pow), где $val –
заданное число, $pow – степень.
<br><br>
<?php

?>

<hr>
<br>
7. *Написать функцию, которая вычисляет текущее время и возвращает его в формате с правильными склонениями, например:

22 часа 15 минут
21 час 43 минуты
<br><br>
<?php
/*function myTime(){
    date_default_timezone_set('Europe/Moscow');
    $time = time();
    $min = date ('i', $time);
    $min_min = $min % 10;
    //$min_end = '';
    $hour = date ('H', $time);
    $hour_min = $hour % 10;
    //$hour_end = '';

    if ($hour_min == 1 && $hour !=11) {
        $hour_end = ' ';
    } elseif ($hour_min <= 0 || $hour_min >=5 && $hour_min <= 9 || $hour >= 11 && $hour < 20){
        $hour_end = 'ов ';
    } else {
        $hour_end = 'а ';
    }

    if ($min_min == 1 && $min !=11){
        $min_end = 'а ';
    } elseif ($min_min <= 0 || $min_min >= 5 && $min_min <= 9 || $min >= 11 && $min < 20) {
        $min_end = ' ';
    } else {
        $min_end = 'ы ';
    }

    echo $hour . " час" . $hour_end . " " . $min . " минут" . $min_end;
    return ;
}
myTime();*/

function myTime($time, $end1, $end2, $end3)
{
    if ($time > 20) {
        $time %= 10;
    }

    if ($time == 1) {
        $string = $end1;
    } elseif ($time > 1 && $time < 5) {
        $string = $end2;
    } else {
        $string = $end3;
    }
    return $string;
}

date_default_timezone_set('Europe/Moscow');
$time = time();
$min = date('i', $time);
$hour = date('H', $time);

echo sprintf("%s %s <br>", $hour, myTime($hour, " час", " часа", " часов"));
echo sprintf("%s %s <br>", $min, myTime($min, " минута", " минуты", " минут"));

$val = 23;
echo sprintf("%s %s <br>", $val, myTime($val, " собака", " собаки", " собак"));

?>

<hr>
<br>
</p>


</body>
