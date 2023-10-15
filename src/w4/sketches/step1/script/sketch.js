let mover;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('pink');
  mover = new MoverNoMass(width / 2, height / 2, 50);
}
function draw() {
  background('pink');

  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVectors();
}
