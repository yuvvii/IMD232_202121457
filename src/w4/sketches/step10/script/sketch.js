let pos;
let vel;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  pos = createVector(random(width), random(height));
  // vel = createVector(random(-5, 5), random(-5, 5));

  //일정 속도 방법 1
  // vel = createVector(1, 0);
  // vel.rotate(random(TAU));
  // vel.mult(5);

  //일정 속도 방법 2
  vel = p5.Vector.random2D();
  vel.mult(5);
}

function draw() {
  background('salmon');
  update();
  checkEdges();
  display();
}

function update() {
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function display() {
  fill('cornsilk');
  noStroke();
  ellipse(pos.x, pos.y, 50);
}
