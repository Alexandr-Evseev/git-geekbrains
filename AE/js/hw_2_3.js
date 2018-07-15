"use strict";

document.getElementById('descript').innerHTML = `<p> Задача: 
   3. Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.<br>
       Затем написать скрипт, который работает по следующему принципу:<br>
   - если a и b положительные, вывести их разность (ноль можно считать положительным числом);<br>
   - если а и b отрицательные, вывести их произведение;<br>
   - если а и b разных знаков, вывести их сумму;
</p>`;
console.clear();
f();

function f() {

    let a, b;

    function inputAABB() {
        a = parseInt(prompt('задайте целочисленные произвольные значение a'));
        b = parseInt(prompt('задайте целочисленные произвольные значение b'));
    }

    inputAABB();
    console.log(a, b);
    if (Number.isNaN(a) || Number.isNaN(b)) {
        alert('Нужно ввести целые числа a и b');
        inputAABB();
    } else if (a >= 0 && b >= 0) {
        alert(` разность чисел равна ${a - b}`);
    } else if (a < 0 && b < 0) {
        alert(` произведение чисел равно ${a * b}`);
    } else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
        alert(` сумма чисел равна ${a + b}`);
    }

    document.getElementById('decision').innerHTML = ` 
    //   
`;

}
