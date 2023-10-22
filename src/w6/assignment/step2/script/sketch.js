let emitter;
let emitters = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  emitter = new Emitter(width / 2, height / 2);
  gravity = createVector(0, 0.1);

  background('pink');
  for (let a = 0; a < 100; a++) emitter.createParticle;
}
function draw() {
  for (let a = 0; a < emitters.length; a++) {
    emitters[a].addParticle();
  }

  background('pink');
  for (let a = 0; a < emitters.length; a++) {
    emitters[a].addParticle();
    emitters[a].update(gravity);
    emitters[a].display();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}

console.log(emitters.length);
