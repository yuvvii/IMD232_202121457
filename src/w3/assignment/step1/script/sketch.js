let pos;
let vel;
let acc;
let mv;
let posToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('pink');
  pos = createVector(random(width), random(height));
  vel = createVector(1, 1);
  acc = createVector();
  mv = createVector();
  posToMv = createVector();
}

function draw() {
  background('pink');
  update();
  checkEdges();
  display();

  mv.set(mouseX, mouseY);
  posToMv = p5.Vector.sub(mv, pos);

  strokeWeight(5);
  stroke('white');
  translate(pos.x, pos.y);
  line(0, 0, posToMv.x, posToMv.y);

  strokeWeight(3);
  stroke('yellow');
  acc.normalize();
  acc.mult(100);
  line(0, 0, acc.x, acc.y);

  strokeWeight(2);
  stroke('lime');
  // vel.normalize();
  // vel.mult(20);
  line(0, 0, vel.x * 10, vel.y * 10);
}

function update() {
  acc = p5.Vector.random2D();

  vel.add(acc);
  vel.limit(10);
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
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 80);
}
