let pos;
let vel;
let acc;
let radius = 25;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector(0.1);
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background('white');
  vel.add(acc);
  pos.add(vel);
  pos.add(vel);
  if (pos.x - radius < 0 || pos.x + radius > width) {
    vel.x *= -1;

    if (pos.y - radius < 0 || pos.y + radius > height) {
      vel.y *= -1;
    }
    ellipse(pos.x, pos.y, radius * 2);
  }
}
