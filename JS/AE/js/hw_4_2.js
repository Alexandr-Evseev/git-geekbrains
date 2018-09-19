"use strict";


document.getElementById('descript').innerHTML = `<p> Задача:
2*. Для игры, реализованной на уроке (бродилка), добавить возможность ходить по диагонали
цифрами 1, 3, 7, 9
Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. при
направлении в стенку
игрок оставался на том же месте где стоял.
</p>`;


function f() {


    /**
     * Объект с настройками игры
     * @property {int} rowsCount Количество строк в карте.
     * @property {int} colsCount Количество колонок в карте.
     * @property {int} startPositionX Начальная позиция игрока по X координате.
     * @property {int} startPositionY Начальная позиция игрока по y координате.
     */
    const settings = { // настройки, это DTO
        rowsCount: 19,
        colsCount: 19,
        startPositionX: 9,
        startPositionY: 9,
    };

    /**
     * Объект игрока, здесь будут все методы и свойства связанные с ним.
     * @property {int} x Позиция по x координате.
     * @property {int} y Позиция по y координате.
     */
    const player = { // персонаж который растет и передвигается
        x: null,
        y: null,

        init(startX, startY) {
            this.x = startX;
            this.y = startY;
        },
        /**
         * Двигает игрока по переданному направлению.
         * @param {{x: int, y: int}} nextPoint Следующая точка.
         */
        move(nextPoint) {
            this.x = nextPoint.x;
            this.y = nextPoint.y;
        },

        /**
         * Отдает следующую точку по ходу движения.
         * @param {int} direction .Направление движения игрока.
         * @returns {{x: int, y: int}} Следующая точка игрока.
         */
        getNextPosition(direction) {
            const nextPosition = {
                x: this.x,
                y: this.y,
            };

            switch (direction) {
                case 1:
                    nextPosition.y++;
                    nextPosition.x--;
                    break;
                case 2:
                    nextPosition.y++;
                    break;
                case 3:
                    nextPosition.y++;
                    nextPosition.x++;
                    break;
                case 4:
                    nextPosition.x--;
                    break;
                case 6:
                    nextPosition.x++;
                    break;
                case 7:
                    nextPosition.y--;
                    nextPosition.x--;
                    break;
                case 8:
                    nextPosition.y--;
                    break;
                case 9:
                    nextPosition.y--;
                    nextPosition.x++;
                    break;
            }

            return nextPosition;
        }
    };

    const game = { //управляет логикой игры
        settings, //settings: settings,
        player, // player: player,

        /**
         * Запускает игру.
         */
        run() {
            this.player.init(this.settings.startPositionX, this.settings.startPositionY);
            while (true) {
                this.render();
                const direction = this.getDirection();

                if (direction === 0) {
                    alert(`Досвидания.`);
                    return;
                }

                const nextPoint = this.player.getNextPosition(direction);
                if (this.canPlayerMakeStep(nextPoint)) {
                    this.player.move(nextPoint); // Двигаем игрока.
                }
            }
        },
        render() {
            let map = "";
            for (let row = 0; row < this.settings.rowsCount; row++) {
                for (let col = 0; col < this.settings.colsCount; col++) {
                    if (this.player.y === row && this.player.x === col) {
                        map += "o ";
                    } else {
                        map += "x ";
                    }
                }
                map += "\n";
            }
            console.clear();
            console.log(map);
        },
        getDirection() {
            const availableDirection = [0, 1, 2, 3, 4, 6, 7, 8, 9];

            while (true) {
                const direction = parseInt(prompt('Введите направление движения цифрами, или 0 для выхода'));
                if (!availableDirection.includes(direction)) {
                    alert(`Для перемещения необходимо ввести ${availableDirection.join(', ')}.`);
                    continue;
                }

                return direction;
            }
        },
        /**
         * Проверяет может ли пользователь перейти на точку.
         * @param {{x: int, y, int}} nextPoint точка которую проверяем.
         * @return {boolean} true если может или false если не может.
         */
        canPlayerMakeStep(nextPoint) {
            return nextPoint.x >= 0 &&
                nextPoint.x < this.settings.colsCount &&
                nextPoint.y >= 0 &&
                nextPoint.y < this.settings.rowsCount;
        },

    };

    game.run();



    document.getElementById('decision').innerHTML =`
        Ответ выведен в консоль.
       `;
}
console.clear();
f();