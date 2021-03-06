"use strict";


document.getElementById('descript').innerHTML = `<p> Задача: 
7. Сравнить null и 0. Попробуйте объяснить результат.<br>
Здесь нужно было объяснить следующие сравнения и их результат: null == 0, null > 0, null >= 0. Почему при null >= 0 true.
</p>`;
console.clear();
f();

function f() {

       document.getElementById('decision').innerHTML = ` 
   Значения null и undefined равны друг другу, но не равны чему бы то ни было ещё. Это жёсткое
правило прописано в спецификации языка. При явном (т.е. при вызванном пользователем)
преобразовании в число null принимает значение 0, а undefined - NaN.<br>
   
    null == 0 будет ${null == 0} // null не объект, и специально в этом случае к числу не приводится. По спецификации будет false   <br>
    null === 0 будет ${null === 0} // типы данных отличаются  <br>
    null > 0 будет ${null > 0} // null приводится к числу и становится 0  <br>
    null < 0 будет ${null < 0} // null приводится к числу и становится 0   <br>
    null <= 0 будет ${null <= 0} // null приводится к числу и становится 0   <br>
    null >= 0 будет ${null >= 0} // null приводится к числу и становится 0   
`;
}

/*

Материалы обязательные к изучению:
Видео про стрелочные функции стандарта ES6 - https://youtu.be/TjeY_VjzSt0
Видео про JSDoc - https://youtu.be/pM9YHZ5Og5E
Видео про области видимости - https://youtu.be/lP0nrofUIRU


6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 5) и вернуть полученное значение.

7. Сравнить null и 0. Попробуйте объяснить результат.

8*. С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень.

9**. Программа должна спросить у пользователя количество денег, которое он хочет положить в банк. Пользователь должен ввести целое число, а программа должна выдать соответствующее сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
Если пользователь введет любое другое целое число, программа также должна выдать соответствующее сообщение, в котором будет отображено это число, а также поставить верное окончание в слове "рубль". Для получения верного склонения слова (любого слова с числом) вам необходимо создать функцию.


 */