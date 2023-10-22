let emitter = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  rectMode(CENTER);
  gravity = createVector(0, 0.06);

  background('pink');
}

function draw() {
  emitter.push(new Emitter(random(width), 0));

  background('pink');
  for (let a = 0; a < emitter.length; a++) {
    emitter[a].applyForce(gravity);
    emitter[a].update();
    emitter[a].display();
  }
  for (let a = emitter.length - 1; a >= 0; a--) {
    if (emitter[a].isDead()) {
      emitter.splice(a, 1);
    }
  }

  console.log(emitter.length);
}
