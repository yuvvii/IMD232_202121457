let posX;
let posY;
let posXAdd = 3;
let posYAdd = 5;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('white');
  posX = width / 2;
  posY = height / 2;
  ellipse(posX, posY, 50);
}

function draw() {
  posX += posXAdd;
  posY += posYAdd;
  ellipse(posX, posY, 50);
}
