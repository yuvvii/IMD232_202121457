let bodies = [];

let G = 1;

let showVector = false;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  reset();
}

function draw() {
  background('pink');

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 24; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      bodies[i].displayVectors();
    }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    reset();
  }
}

function reset() {
  for (let i = 0; i < 24; i++) {
    bodies[i] = new Body(random(width), random(height), random(16, 100));
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}
