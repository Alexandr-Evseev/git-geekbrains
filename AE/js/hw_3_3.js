"use strict";


document.getElementById('descript').innerHTML = `<p> Задача:
  спомощью цикла do while написать алгоритм вывода чисел от 0 до 10,
  чтобы результат был таким:
  0 - это ноль 
  1 - это тнечетное число
  2 это четное число
  ...
</p>`;

f();

function f() {

    let i = 0;
    do {
        let chet = ' - это нечетное число';
        if  (i === 0) {
            chet = ' - это ноль';
        }else if (i % 2 === 0){
            chet = ' - это четное число ';
        }

        console.log(i + chet);

    i++;
    } while (i < 11);


    document.getElementById('decision').innerHTML = `ответ выведен в консоль
    
   `;
}
