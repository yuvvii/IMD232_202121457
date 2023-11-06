let emitters = [];
let gravity = 0;
let repeller;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  for (let a = 0; a < 5; a++) {
    emitters.push(new Emitter((width / 6) * (a + 1), 20));
  }
  gravity = createVector(0, 0.1);
  repeller = new Repeller(width / 2, height / 2, 5000);

  background('pink');
}
function draw() {
  for (let a = 0; a < emitters.length; a++) {
    emitters[a].addParticle();
  }
  background('pink');
  for (let a = 0; a < emitters.length; a++) {
    emitters[a].applyGravity(gravity);
    emitters[a].applyRepeller(repeller);
    emitters[a].update();
    emitters[a].display();
  }
  repeller.display();
}

function mouseMoved() {
  repeller.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  repeller.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  repeller.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  repeller.mouseReleased();
}
