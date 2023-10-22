let emitters = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  gravity = createVector(0, 0.1);

  background('pink');
}
function draw() {
  for (let a = 0; a < emitters.length; a++) {
    emitters[a].addParticle();
  }
  background('pink');
  for (let a = 0; a < emitters.length; a++) {
    emitters[a].applyGravity(gravity);
    emitters[a].update();
    emitters[a].display();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}
