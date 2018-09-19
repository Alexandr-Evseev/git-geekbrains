"use strict";


document.getElementById('descript').innerHTML = `<p> <br> Задача:<br>
На базе игры (приняв за пример), созданной на уроке, реализовать игру «Кто хочет стать
миллионером?».<br>
Т.е. у вас должен быть главный объект содержащий всю логику игры, который будет иметь
методы, например
метод run, возможно метод init и т.д.<br>
В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).<br>
Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и
предлагать варианты
ответов в виде теста, например:<br>
Сколько букв в слове "привет":<br>
a. Пять.<br>
b. Шесть.<br>
c. Семь.<br>
d. Куда я попал?<br>
Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.<br>
По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и
предложить
сыграть снова.<br>
Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.
</p>`;


function f() {

  /**
   * @type {object[]} массив с обьектами вопросов.
   */
  const question = [
    {
      text: 'Загадка 1',
      variants: {
        a: ' правильный ',
        b: ' не правильный',
        c: ' не правильный',
        d: ' не правильный',
      },
      correctAnswerIndex: 'a',
    },
    {
      text: 'Загадка 2',
      variants: {
        a: ' правильный ',
        b: ' не правильный',
        c: ' не правильный',
        d: ' не правильный',
      },
      correctAnswerIndex: 'a',
    },
    {
      text: 'Загадка 3',
      variants: {
        a: ' правильный ',
        b: ' не правильный',
        c: ' не правильный',
        d: ' не правильный',
      },
      correctAnswerIndex: 'a',
    },
    {
      text: 'Загадка 4',
      variants: {
        a: ' правильный ',
        b: ' не правильный',
        c: ' не правильный',
        d: ' не правильный',
      },
      correctAnswerIndex: 'a',
    },
    {
      text: 'Загадка 5',
      variants: {
        a: ' правильный ',
        b: ' не правильный',
        c: ' не правильный',
        d: ' не правильный',
      },
      correctAnswerIndex: 'a',
    }
  ];

  /**
   * @property {questions} questions массив с обьектами вопросов.
   * @property {int} scoreCount Счетчик правильных ответов.
   * @property {int} questionIndex индекс текущего вопроса из массива questions.
   */
  const game = {
    question,
    scoreCount: null,
    questionIndex: null,
    /**
     * Инициализация игры.
     */
    init() {
      this.scoreCount = 0;
      this.questionIndex = 0;
    },
    /**
     * Запуск игры.
     */
    run() {
      this.init();
      alert(' Здравствуйте! Игра начинается.');

      while (1) {
        const answer = this.getAnswer();
        if (this.userWantExit(answer)) {
          alert('Досвидания');
          break;
        }
        if (this.isAnswerCorrect(answer)) {
          alert('Это правильный ответ.');
          this.scoreCount++;
        }else {
          alert('К сожалению, это ошибка');
        }

        this.questionIndex++;

        if (this.isGameOver()){
          alert(`Ваш счет: ${this.scoreCount}`);
          break;
        }
      }
    },
    /**
     * Проверяет количество заданных вопросов до конца игры.
     * @return {boolean}
     */
    isGameOver(){
      return this.questionIndex > 4;
    },
    /**
     * Проверяет введен ли правильный ответ на заданный вопрос.
     * @param {string} userAnswer Ответ пользователя
     * @returns {boolean} true, если ответ верный, иначе false.
     */
    isAnswerCorrect(userAnswer){
      return this.question[this.questionIndex].correctAnswerIndex === userAnswer;
    },
    /**
     * Проверяет хочет ли пользователь выйти из игры.
     * @param {string} answer Ответ пользователя
     * @returns {boolean} true, если ответ верный, иначе false.
     */
    userWantExit(answer){
      return answer === 'exit';
    },
    /**
     * Получает от пользователя ответ на загадку.
     * @returns {string} Строка ответа пользователя.
     */
    getAnswer() {
      while (1) {

        let answer = prompt(this.getCurrentQuestionString());

        if (answer === null) {
          alert(` Если вы хотите выйти, наберите "exit"`);
          continue;
        }
        answer = answer.trim().toLowerCase(); // trim убирает пробелы по бокам. toLowerCase переводит весь текст в нижний регистр.

        if (!this.validateAnswer(answer)) {
          alert('Необходимо выбрать один из предложенных вариантов ответа.');
          continue;
        }
        return answer;
      }
    },
    /**
     * Возвращает строку с текущим вопросом и вариантами ответов.
     * @return {string} строку с текущим вопросом и вариантами ответов.
     */
    getCurrentQuestionString() {
      const questions = this.question[this.questionIndex];
      let questionString = `Вопрос: ${questions.text}.\n\n Варианты ответов: \n `;//${questions.variants}.`
      for (const key in questions.variants) {
        if (questions.variants.hasOwnProperty(key)) {
          questionString += `${key} - ${questions.variants[key]}\n`;
        }
      }

      return questionString;
    },
    /**
     * Проверяем ответ пользователя на корректность ввода.
     * @param {string} userAnswer Ответ пользователя.
     * @return {boolean} true если введена строка перечисленная в массиве, иначе false.
     */
    validateAnswer(userAnswer) {
      return ['exit', 'a', 'b', 'c', 'd'].indexOf(userAnswer) !== -1;
    },
  };

  game.run();

}
console.clear();
f();