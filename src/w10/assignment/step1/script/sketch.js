class Game {
  constructor() {
    this.cells = [];
    this.rowNum = 80;
    this.colNum = 80;

    for (let row = 0; row < this.rowNum; row++) {
      for (let col = 0; col < this.colNum; col++) {
        const x = (width / this.colNum) * col;
        const y = (height / this.rowNum) * row;
        const newCell = new Cell(
          x,
          y,
          width / this.colNum,
          height / this.rowNum
        );
        this.cells.push(newCell);
      }
    }

    for (let row = 0; row < this.rowNum; row++) {
      for (let col = 0; col < this.colNum; col++) {
        const neighborsIdx = [
          this.getIdx(row - 1, col - 1),
          this.getIdx(row - 1, col),
          this.getIdx(row - 1, col + 1),
          this.getIdx(row, col + 1),
          this.getIdx(row + 1, col + 1),
          this.getIdx(row + 1, col),
          this.getIdx(row + 1, col - 1),
          this.getIdx(row, col - 1),
        ];

        if (col === 0) {
          neighborsIdx[0] = -1;
          neighborsIdx[6] = -1;
          neighborsIdx[7] = -1;
        } else if (col === this.colNum - 1) {
          neighborsIdx[2] = -1;
          neighborsIdx[3] = -1;
          neighborsIdx[4] = -1;
        }

        if (row === 0) {
          neighborsIdx[0] = -1;
          neighborsIdx[1] = -1;
          neighborsIdx[2] = -1;
        } else if (row === this.rowNum - 1) {
          neighborsIdx[4] = -1;
          neighborsIdx[5] = -1;
          neighborsIdx[6] = -1;
        }

        const neighbors = [];
        neighborsIdx.forEach((eachIdx) => {
          neighbors.push(eachIdx >= 0 ? this.cells[eachIdx] : null);
        });

        const idx = this.getIdx(row, col);
        this.cells[idx].setNeighbors(neighbors);
      }
    }

    randomSeed(1);
    this.cells.forEach((each) => {
      const randomState = floor(random(3));
      each.state = randomState;
    });
  }

  getIdx(row, col) {
    return row * this.colNum + col;
  }

  draw() {
    background('pink');

    this.cells.forEach((each) => {
      each.calcNextState();
    });

    this.cells.forEach((each) => {
      each.update();
    });

    this.cells.forEach((each) => {
      each.display(mouseX, mouseY);
    });
  }
}

class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.state = 0;
    this.nextState = this.state;
    this.neighbors = [];
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  calcNextState() {
    const winningStates = [2, 0, 1];
    const winningNeighbors = this.neighbors.filter(
      (eachNeighbor) =>
        eachNeighbor && winningStates[eachNeighbor.state] === this.state
    );

    if (winningNeighbors.length <= 2) {
      this.nextState = this.state;
    } else {
      const winningNeighbor = winningNeighbors[0];
      this.nextState = winningNeighbor.state;
    }
  }

  update() {
    this.state = this.nextState;
  }

  isHover(mx, my) {
    return (
      this.x < mx && this.x + this.w > mx && this.y < my && this.y + this.h > my
    );
  }

  toggleState(mx, my) {
    if (!this.isClickable) return false;
    if (!this.isHover(mx, my)) return false;
    this.state = (this.state + 1) % 3;
    return true;
  }

  display(mx, my) {
    push();
    translate(this.x, this.y);
    stroke(this.isHover(mx, my) ? 'red' : 'black');
    fill(
      this.state === 0
        ? color('pink')
        : this.state === 1
        ? color('beige')
        : color('lime')
    );
    rect(0, 0, this.w, this.h);
    pop();
  }
}

let game;
function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  game = new Game();
}
function draw() {
  game.draw();
}
function mouseClicked() {
  for (let idx = 0; idx < game.cells.length; idx++)
    if (game.cells[idx].toggleState(mouseX, mouseY)) break;
}
