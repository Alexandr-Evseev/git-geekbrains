"use strict";

/**
 * Объект содержащий методы для валидации.
 */
const validationsMethod = {
  /**
   * Метод проверки поля по длинне
   * @param {HTMLInputElement} field Поле, которое надо проверить.
   * @param {Array} args Массив с аргументами.
   * @returns {strings / null} строку с ошибкой или null, если ошибки небыло.
   */
  length(field, args) {
    const valLength = field.value.length,
      sign = args[0],
      then = args[1];

    let message = null;
    switch (sign) {
      case '>':
        if (!(valLength > then)) {
          message = `Минимальная длинна поля ${then + 1} символов.`;
        }
        break;
      case '<':
        if (!(valLength < then)) {
          message = `Максимальная длинна поля ${then - 1} символов.`;
        }
        break;
      case '>=':
        if (!(valLength >= then)) {
          message = `Минимальная длинна поля ${then} символов.`;
        }
        break;
      case '<=':
        if (!(valLength <= then)) {
          message = `Максимальная длинна поля ${then} символов.`;
        }
        break;
      case '==':
        if (valLength !== then) {
          message = `Длинна поля должна быть равна ${then} символов.`;
        }
        break;
    }
    return message;
  },
  /**
   * Проверяет содержит ли поле только цифры.
   * @param {HTMLInputElement} field Поле, которое надо проверить.
   * @returns {strings / null} строку с ошибкой или null, если ошибки небыло.
   */
  mustContainNumber(field) {
    for (const val of field.value) {
      if (!Number.isInteger(Number.parseInt(val))) {
        return 'Поле должно содержать только цифры.';
      }
    }
    return null;
  },
  /**
   * Проверяет совпадают ли  у двух полей значения.
   * @param {HTMLInputElement} field Поле, которое надо проверить.
   * @param {Array} args Массив с аргументами.
   * @returns {strings / null} строку с ошибкой или null, если ошибки небыло.
   */
  fieldsCompare(field, args) {
    return field.value !== document.querySelector(args[0]).value ? 'Поля не совпадают.' : null;
  },
};

const form = {
  formEl: null,
  rules: null,
  init() {
    this.formEl = document.querySelector('.my-form');
    // когда форма отправляется (submit), мы передаем отправляемое в formSubmit
    this.formEl.addEventListener('submit', e => this.formSubmit(e));
    this.rules = [
      {
        selector: 'input[name="name"]',  //какой input проверяем
        methods: [
          {name: 'length', args: ['>=', 1]},
          {name: 'length', args: ['<=', 50]},
        ],
      },
      {
        selector: 'input[name="phone"]',  //какой input проверяем
        methods: [
          {name: 'mustContainNumber'},
          {name: 'length', args: ['==', 11]},
        ],
      },
      {
        selector: 'input[name="password"]',  //какой input проверяем
        methods: [
          {name: 'length', args: ['>=', 5]},
          {name: 'length', args: ['<=', 50]},
        ],
      },
      {
        selector: 'input[name="password_repeat"]',  //какой input проверяем
        methods: [
          {name: 'fieldsCompare', args: ['input[name="password"]']},
        ],
      },
    ];
  },
  /**
   * Метод верификации который запускается перед отправкой формы.
   * @param {event} e Событие отправки формы.
   */
  formSubmit(e) {
    if (!this.validate()) {
      e.preventDefault();
    }
  },
  /**
   * Валидирует форму.
   */
  validate() {
    let isValid = true;
    for (let rule of this.rules) {
      const inputEl = document.querySelector(rule.selector);
      for (let method of rule.methods) {
        //const validFunction = validationsMethod[method.name];
        const errMessage = validationsMethod[method.name](inputEl, method.args);
        if (errMessage) {
          this.setInvalidField(inputEl, errMessage);
          isValid = false;
          break;
        } else {
          this.setValidField(inputEl);
        }
      }
    }
    return isValid;
  },
  /**
   * Устанавливает класс провала валидации интуту и ставит сообщение что именно не прошло проверку.
   * @param {Element} inputEl Элемент инпута , который проходил валидацию.
   * @param {string} message Сообщение об ошибке.
   */
  setInvalidField(inputEl, message) {
    const cl = inputEl.classList;
    cl.remove('is-valid');
    cl.add('is-invalid');

    let parentInputEl = inputEl.parentNode;
    let hintWrap = parentInputEl.querySelector('.invalid-feedback');
    if (!hintWrap) {
      hintWrap = document.createElement('div');
      hintWrap.classList.add('invalid-feedback');
      inputEl.parentNode.appendChild(hintWrap);
    }
    hintWrap.textContent = message;
  },
  /**
   * Устанавливает класс прохождения валидации интуту и убирает  сообщение о ошибке , если такое было.
   * @param {Element} inputEl Элемент инпута , который проходил валидацию.
   */
  setValidField(inputEl) {
    const cl = inputEl.classList;
    cl.remove('is-invalid');
    cl.add('is-valid');
  },

};

form.init();

/*
Я в курсе что пароли так отправлять нельзя.
По условию задания нужно было описать проверку введенных данных, и именно на js.
Поэтому написано так.
 */