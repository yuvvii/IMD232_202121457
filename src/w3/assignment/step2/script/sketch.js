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

  strokeWeight(3);
  translate(pos.x, pos.y);
  posToMv = p5.Vector.sub(mv, pos);

  stroke('white');
  line(0, 0, posToMv.x, posToMv.y);

  strokeWeight(2);
  stroke('lime');
  line(0, 0, vel.x * 10, vel.y * 10);

  acc.normalize();
  strokeWeight(4);
  stroke('deeppink');
  line(0, 0, acc.x * 10, acc.y * 10);
}

function update() {
  vel.add(acc);
  vel.limit(8);
  pos.add(vel);
}

function display() {
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 50);
}
