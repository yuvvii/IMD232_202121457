let position;

let velocity = [3, 5];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);

  position = [width / 2, height / 2];

  console.log('position', position);
  console.log('velocity', velocity);
}

function draw() {
  background(255);

  position[0] += velocity[0];
  position[1] += velocity[1];

  ellipse(position[0], position[1], 50);

  if (position[0] < 0 || position[0] > width) {
    velocity[0] *= -1;
  }
  if (position[1] < 0 || position[1] > height) {
    velocity[1] *= -1;
  }
}
