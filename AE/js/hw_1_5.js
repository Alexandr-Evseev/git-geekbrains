"use strict";


document.getElementById('descript').innerHTML = `<p> Задача: 
5*. Пользователь, с помощью команды prompt, вводит номер билета - 6 цифр.
Программа определяет является ли счастливым данный билетик и выводит соответстующее сообщение в консоль.
 Счастливый билет - билет, у которого сумма первых трех цифр равна сумме последних трех цифр номера билета.
Для выполнения задания необходимо использовать оператор % и ветвление.
Чтобы сравнить два значения, можно использовать if и else (курс основ программирования), например:
</p><p>
\`\`\`
const a = 1;
const b = 1;
if (a === b) {
  console.log('Две переменные a и b равны.');
}
\`\`\` 
</p>`;
console.clear();
f();
function f() {

    const nTiket = +prompt('Введите подряд 6 цифр билета.');
    if (isNaN(nTiket) || nTiket <= 99999 || nTiket >= 1000000) {
        console.log('Вы ввели не правильный номер. Нужны 6 цифр подряд.');
        document.getElementById('decision').innerHTML = `Вы ввели не правильный номер. Нужны 6 цифр подряд.`;
    } else {
        const a = nTiket % 10 + parseInt(nTiket / 10) % 10 + parseInt(nTiket / 100) % 10;
        const b = parseInt(nTiket / 1000) % 10 + parseInt(nTiket / 10000) % 10 + parseInt(nTiket / 100000) % 10;
        if (a === b) {
            console.log('Две переменные a и b равны. Билет счастливый');
            document.getElementById('decision').innerHTML = `Билет счастливый`;
        } else {
            console.log('Две переменные a и b не равны. Билет не счастливый');
            document.getElementById('decision').innerHTML = `Билет не счастливый`;
        }
    }

}


