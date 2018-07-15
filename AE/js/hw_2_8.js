"use strict";


document.getElementById('descript').innerHTML = `<p> Задача: 
8*. С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень.
</p>`;
console.clear();
f();

function f() {

    let val = parseInt(prompt("введите число"));
    let pow = parseInt(prompt("введите степень в которую возвести число"));

    console.log(power(val, pow));

    function power(val, pow) {
        if (isNaN(val) || isNaN(pow)) {
            return console.log(" Введены неверные данные. Попробуйте снова. ");
        }
        if (pow < 1) {
            return 1;
        }
        return val * power(val, pow - 1);
    }

    document.getElementById('decision').innerHTML = `Ответ выведен в консоль.`;
}
