"use strict";

document.getElementById('descript').innerHTML = `<p> Задача: 
4. Самостоятельно разобраться с атрибутами тега script 
(async и defer), описать комментариями для чего они, чем отличаются. 
</p>`;
console.clear();
f();

function f() {

    document.getElementById('decision').innerHTML = `<p> async и defer  позволяют загрузить скрипты асинхронно с html. <br>
    defer - позволяет соблюсти очередность исполнения скриптов по очереди с верхнего и далее. <br>
    async - очередность соблюдать не будет, какой быстрее загрузился тот и будет исполнен раньше. </p>`;

}


