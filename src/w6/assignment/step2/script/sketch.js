let emitter;
let gravity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  emitter = new Emitter(mouseX, mouseY);
  gravity = createVector(0, 0.1);

  background('pink');
}

function draw() {
  background('pink');

  emitter.update(gravity);
  emitter.display();
  console.log(emitter.particles.length);
}

function mouseClicked() {
  for (let a = 0; a < 100; a++) {
    emitter.setPosition(mouseX, mouseY);
    emitter.addParticle(a);
  }
}
