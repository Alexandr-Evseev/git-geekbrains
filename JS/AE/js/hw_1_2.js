"use strict";


document.getElementById('descript').innerHTML = `
<p> Задача: 2. Объявить две переменные: 
admin и name. Записать в name строку "Василий". 
Скопировать значение из name в admin.
Вывести в консоль переменную admin (должно вывести "Василий").</p>`;
console.clear();
f();

function f() {

    let admin, name = 'Василий';
    console.log(admin = name);
    document.getElementById('decision').innerHTML = `Имя админа ${admin}`;

}

