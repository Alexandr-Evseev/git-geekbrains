"use strict";

document.getElementById('descript').innerHTML = `<p> Задача: 
2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
   (описать последовательность действий).<br>
   let a = 2;<br>
   let x = 1 + (a *= 2);
</p>`;

f();

function f() {

    let a = 2;
    let x = 1 + (a *= 2);
    console.log(x);

    document.getElementById('decision').innerHTML = ` 
    //   1)  a = a * 2 = 4<br>
    //   2)  1 + a = 5<br>
    //   3)  x = 5
`;

}
