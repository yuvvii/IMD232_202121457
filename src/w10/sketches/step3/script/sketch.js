let emitter;
let emitters = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  emitter = new Emitter(width / 2, 20);
  gravity = createVector(0, 0.1);

  background('pink');
}
function draw() {
  emitter.addParticle();
  for (let a = 0; a < emitters.length; a++) {
    emitters[a].addParticle();
  }
  background('pink');
  emitter.update(gravity);
  emitter.display();
  for (let a = 0; a < emitters.length; a++) {
    emitters[a].update(gravity);
    emitters[a].display();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}
