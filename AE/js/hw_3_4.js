"use strict";


document.getElementById('descript').innerHTML = `<p> Задача:
  вывести  с помощью  цикла for числа от 0 до 9, НЕ используя тело цикла. <br>
</p>`;

f();

function f() {

    for (let i = 0; i <10; console.log(i++)){}


    document.getElementById('decision').innerHTML = `ответ выведен в консоль
    
   `;
}
