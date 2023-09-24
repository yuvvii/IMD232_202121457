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
  strokeWeight(2);
  stroke('white');
  line(0, 0, cv.x, cv.y);

  mv.set(mouseX, mouseY);
  stroke('fuchsia');
  line(0, 0, mv.x, mv.y);

  cvToMv = p5.Vector.sub(mv, cv);
  translate(cv);
  stroke('yellow');
  line(0, 0, cvToMv.x, cvToMv.y);

  cvToMv.mult(0.5);
  strokeWeight(5);
  stroke('black');
  line(0, 0, cvToMv.x, cvToMv.y);
}
