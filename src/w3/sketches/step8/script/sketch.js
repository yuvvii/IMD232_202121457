let mv;
let cv;
let cvToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('pink');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}

function draw() {
  background('pink');

  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);
  let mag = cvToMv.mag();
  noStroke();
  fill('black');
  rect(10, 10, mag, 10);

  strokeWeight(5);
  stroke('white');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);
}
