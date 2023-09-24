let pos;
let vel;
let acc;
let mv;
let posToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('pink');
  pos = createVector(random(width), random(height));
  vel = createVector();
  acc = createVector();
  mv = createVector();
  posToMv = createVector();
}

function draw() {
  background('pink');
  update();
  display();

  mv.set(mouseX, mouseY);
  acc.set(posToMv.x, posToMv.y);
  translate(pos.x, pos.y);
  posToMv = p5.Vector.sub(mv, pos);

  strokeWeight(3);
  stroke('white');
  line(0, 0, posToMv.x, posToMv.y);

  strokeWeight(2);
  stroke('lime');
  line(0, 0, vel.x * 10, vel.y * 10);

  strokeWeight(4);
  stroke('deeppink');
  line(0, 0, acc.x * 0.1, acc.y * 0.1);

  if (mouseIsPressed === true) {
    acc.mult(-0.1);
  } else {
    acc.mult(0.1);
  }
}

function update() {
  vel.add(acc);
  vel.limit(5);
  pos.add(vel);
}
function display() {
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 50);
}
