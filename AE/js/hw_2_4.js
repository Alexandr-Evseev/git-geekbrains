"use strict";


document.getElementById('descript').innerHTML = `<p> Задача: 
4. Переменной а должно присваиваться случайное целое число в промежутке от 0 до 15 включительно.
С помощью оператора switch необходимо организовать вывод чисел от этой переменной a до 15.
</p>`;

f();

function f() {
    let a = Math.floor(Math.random() * 16);
    switch (a) {
        case 1:
            console.log(`а = 1`);
        case 2:
            console.log(`а = 2`);
        case 3:
            console.log(`а = 3`);
        case 4:
            console.log(`а = 4`);
        case 5:
            console.log(`а = 5`);
        case 6:
            console.log(`а = 6`);
        case 7:
            console.log(`а = 7`);
        case 8:
            console.log(`а = 8`);
        case 9:
            console.log(`а = 9`);
        case 10:
            console.log(`а = 10`);
        case 11:
            console.log(`а = 11`);
        case 12:
            console.log(`а = 12`);
        case 13:
            console.log(`а = 13`);
        case 14:
            console.log(`а = 14`);
        case 15:
            console.log(`а = 15`);
            break;
        default:
            break;
    }

    document.getElementById('decision').innerHTML = ` 
   Ответ выведен в консоль.
   `;

    /*
        let b = Math.floor(Math.random() * 16);

        /!**
         *
         * @param b рандомое число от 0 до 15
         * @returns {*} возврат значения b
         * @constructor  вывод в консоль значений b от выпавшего до 15
         *!/
        function Perechen(b) {
            if (b < 16) {
                console.log(b);
                ++b;
                b = Perechen(b);
            }
            //    return(b);
        }
        // b = Perechen(b);
        // console.log(b);
    */

}
