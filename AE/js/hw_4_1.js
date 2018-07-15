"use strict";


document.getElementById('descript').innerHTML = `<p> Задача:
1 Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0,
999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны
разряды числа:
- единицы (в свойстве frsttigit)
- десятки (в свойстве secondtigit)
- сотни (в свойстве thirdtigit)
Например, для числа 45 мы должны получить следующий объект:
\`\`\`
{
frsttigit: 5,
secondtigit: 4,
thirdtigit: 0,
}
\`\`\`
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
</p>`;


function f() {

    function getDigitsOfNumber(num) {
        if (!Number.isInteger(num) || num < 0 || num > 999) {
            console.log('Значение аргумента должно быть целым числом в диапазоне [ 0 ... 999].');
            return {};
        }

        const obj = {};

        obj.frsttigit = num % 10;
        obj.secondtigit = Math.floor(num / 10) % 10;
        obj.thirdtigit = Math.floor(num / 100) % 10;

        return obj;
    }

console.log(getDigitsOfNumber(833))

    document.getElementById('decision').innerHTML =`
        Ответ выведен в консоль.
       `;
}
console.clear();
f();