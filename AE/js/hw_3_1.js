"use strict";


document.getElementById('descript').innerHTML = `<p> Задача: 
С помощью цикла while вывести все простые числа в промежутке от 0 до 100 (можно без оптимизаций).
</p>`;
console.clear();
f();

function f() {

    let i = 0;
    while (i < 100) {
        if (isPrimeNumber(i)) {
            console.log(i);

        }
        i++;
    }

    /**
     * функция проверяет простое ли число.
     * @param {int} number число которое проверяем.
     * @returns {boolean} вернет true если число простое, иначе false.
     */
    function isPrimeNumber(number) {
        if (number < 2) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(number) ; i++) {
            if (number % i === 0) {
                return false;
            }
        }

        return true;
    }
// Math.sqrt(number) это корень из числа number

   document.getElementById('decision').innerHTML = `
Перечень простых чисел выведен в консоль.
`;

}