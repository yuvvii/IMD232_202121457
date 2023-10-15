let mover;
let wind;
let gravity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('pink');
  mover = new MoverNoMass(width / 2, height / 2, 50);
  wind = createVector(0.3, 0);
  gravity = createVector(0, 0.1);
}

function draw() {
  background('pink');

  mover.addAcc(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    mover.addAcc(wind);
  }
  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVector();
}
