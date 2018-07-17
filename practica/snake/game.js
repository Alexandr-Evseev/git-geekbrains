"use strict";


const settings = {
  rowsCount: 11,
  colsCount: 11,
  startPositionX: 5,
  startPositionY: 5,
  startDirection: 'right',
  stepsInSecond: 5,
  playerCellColor: '#AA3333',
  emptyCellColor: '#EEEEEE',
};

const player = {
  x: null,
  y: null,
  direction: null,
  makeStep() {
    const nextPoint = this.getNextStepPoint();
    this.x = nextPoint.x;
    this.y = nextPoint.y;
  },
  getNextStepPoint() {
    // Текущая позиция игрока
    const point = {
      x: this.x,
      y: this.y,
    };
    // Смещаем игрока на один шаг в зависимости от направления
    switch (this.direction) {
      case 'up':
        point.y--;
        break;
      case 'right':
        point.x++;
        break;
      case 'down':
        point.y++;
        break;
      case 'left':
        point.x--;
        break;
    }
    return point;
  },
  init(startX, startY, startDirection) {
    this.x = startX;
    this.y = startY;
    this.direction = startDirection;
  },
  setDirection(direction) {
    this.direction = direction;
  },
};

const game = {
  settings,
  player,
  containerElement: null,
  cellsElements: null,
  run() {
    //console.log('run');
    this.init();
    this.render();
    setInterval(() => {
      if (this.canPlayerMakeStep()) {
        this.player.makeStep();
        this.render();
      }
    }, 1000 / this.settings.stepsInSecond);
  },
  init() {
    this.player.init(this.settings.startPositionX, this.settings.startPositionY, this.settings.startDirection);
    this.containerElement = document.getElementById('game');
    this.initCells();
    //console.log('init');
    this.initEventHandlers();
  },
  initCells() {
    // Очищаем контейнер для игры.
    this.containerElement.innerHTML = '';
    // Массив ячеек пока пуст.
    this.cellsElements = [];
    // Пробегаемся в цикле и создаем строки с ячейками
    for (let row = 0; row < this.settings.rowsCount; row++) {
      // Создаем строку.
      const trElem = document.createElement('tr');
      // Добавляем строку в контейнер с игрой.
      this.containerElement.appendChild(trElem);
      // в каждой строке пробегаемся  по циклу  столько раз, сколько у нас колонок.
      for (let col = 0; col < this.settings.colsCount; col++) {
        // Создаем ячейку.
        const cell = document.createElement('td');
        // Записываем ячейку в массив ячеек.
        this.cellsElements.push(cell);
        // Добавляем ячейку в контейнер с игрой.
        trElem.appendChild(cell);
      }
    }

    //console.log(this.cellsElements);
  },
  initEventHandlers() {
    document.addEventListener('keydown', event => this.keyDownHandler(event));
  },
  keyDownHandler(event) {
    //console.log(event);
    switch (event.keyCode) {
      case 38:
      case 87:
        return this.player.setDirection('up');
      case 39:
      case 68:
        return this.player.setDirection('right');
      case 40:
      case 83:
        return this.player.setDirection('down');
      case 37:
      case 65:
        return this.player.setDirection('left');
    }
  },
  render() {
    this.cellsElements.forEach(cell => cell.style.backgroundColor = this.settings.emptyCellColor);

    // this.cellsElements.forEach(function(cell) {
    //   cell.style.backgroundColor = this.settings.emptyCellColor;
    // });

    const playerCell = document
      .querySelector(`tr:nth-child(${this.player.y + 1})`)
      .querySelector(`td:nth-child(${this.player.x + 1})`)
    ;
    playerCell.style.backgroundColor = this.settings.playerCellColor;
  },
  canPlayerMakeStep() {
    const nextPoint = this.player.getNextStepPoint();

    return nextPoint.x >= 0 &&
      nextPoint.x < this.settings.colsCount &&
      nextPoint.y >= 0 &&
      nextPoint.y < this.settings.rowsCount;
  },
};

window.onload = () => game.run();