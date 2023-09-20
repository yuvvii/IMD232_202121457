let pos;
let vel;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('white');
  posX = width / 2;
  posY = height / 2;
}

function draw() {
  pos.add(vel);
  // if (pos.x < 0) {
  //   vel.x *= -1;
  // } else if (pos.x > width) {
  //   vel.x *= -1;
  // }

  if (pos.x - radius < 0 || pos.x + radius > width) {
    vel.x *= -1;

    if (pos.y - radius < 0 || pos.y + radius > height) {
      vel.y *= -1;
    }
  }
  ellipse(posX, posY, 2 * radius);
}
