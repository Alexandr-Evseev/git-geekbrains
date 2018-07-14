"use strict";


document.getElementById('descript').innerHTML = `<p> Задача:
Вывести пирамиду в консоль. 20 строк. <br>
</p>`;

f();

function f() {

    for (let i = 0, x = "x"; i < 21; i++) {
        console.log(x);
        x = x + 'xx';
    }

    document.getElementById('decision').innerHTML = `ответ выведен в консоль
    
   `;
}
