"use strict";

let number;
let attempts;

startGames();

function startGames() {
    resetGame();
    while (true) {
        //Получаем от пользователя 4 цифры.
        const guess = prompt(" Попробуйте отгадать 4 разных положительных цифры, загаданных компьютером. \n" +
            " Можете ввести -1 если хотите закончить игру. ");
        // проверяем хочет ли пользователь выйти из игры.
        if (guess === '-1') {
            return alert('Игра завершена.');

        }
        if (!validation(guess)) {
            // если были введены неверные данные, сообщаем об этом и начинаем новую итерацию.
            alert('Необходимо ввести 4 целых положительных цифры.');
            continue;
        }

        attempts++;

        // Получаем результат от проверки ответа пользователя.
        const result = checkGuess(guess);


    }
}

function resetGame() {
    attempts = 0;

    number = [];

    while (number.length < 4) {
        const part = Math.floor(Math.random() * 10);
        if (!number.includes(part)) {
            number.push(part);
        }
    }
}

/**
 * функция осуществляет проверку переданного ей значения.
 * @param {string} guess Строка что ввел пользователь.
 * @return {boolean} Если в этом аргументе будет 4 целых положительных цифры, тогда функция вернет true, иначе false
 */
function validation() {
    const guessLitterals = guess.split('');

    if (guessLitterals.length !== 4) {
        return false;
    }

    for (let i = 0; i < guessLitterals.length; i++) {
        if (!Number.isInteger(+guessLiterals[i])) {
            return false;
        }
    }

    return true;
}

// string split  найти на мозилла девелопер методы которые есть у строки. !!!

/**
 * Функция принимает строку из 4-х символов чисел и проверяет ее на совпадение загаданных цифр и их местоположения.
 * @param {string} guess Строка с 4-мя цифрами что ввел пользователь.
 * @return {number[]} Возвращает массив с двумя индексами 0 (количество быков) и 1 (количество коров).
 */
function checkGuess(guess) {
    const result = [0, 0];
    const guessLitterals = guess.split('');

    
    return result;
}