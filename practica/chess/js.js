"use strict";


const chess = {
  gameContainerEl: document.getElementById('game'),

  renderMap() {
    const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

    for (let row = 0; row < rows.length; row++) {
      const tr = document.createElement('tr');
      this.gameContainerEl.appendChild(tr);

      for (let col = 0; col < cols.length; col++) {
        const td = document.createElement('td');
        tr.appendChild(td);

        if (rows[row] === 0 && cols[col] !== 0) {
          td.innerHTML = cols[col];
        } else if (cols[col] === 0 && rows[row] !== 0) {
          td.innerHTML = rows[row];
        }

        if (this.isCellIsBlack(row, col)) {
          td.style.backgroundColor = 'gray';

        }
      }
    }
  },
  /**
   * Определяет еявляется ли ячейка черной
   * @param {int} rowNum Номер в строке.
   * @param {int} colNum Номер в колонке.
   * @returns {boolean} true если ячейка должна быть черной, иначе false.
   */
  isCellIsBlack(rowNum, colNum) {
    if (rowNum === 0 || rowNum === 9 || colNum === 0 || colNum === 9) {
      return false;
    }
    return (rowNum % 2 === 0 && colNum % 2 === 1) || (rowNum % 2 === 1 && colNum % 2 === 0);
  },
};

chess.renderMap();