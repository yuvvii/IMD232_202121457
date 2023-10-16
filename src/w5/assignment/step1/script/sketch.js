const Num = 8;
const Num2 = 8;
const Begin = 60;
const Gap = 30;

let angleBegin = 0;
let angleBeginVel;
let angleStep;

let colors = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('pink');

  for (let i = 0; i < 4; i++) {
    colors.push(color(random(255), random(255), random(255)));
  }
}

function draw() {
  background('pink');
  noFill();

  stripeGap = min(width, height) / 10;

  for (let a = 0; a < Num; a++) {
    for (let b = 0; b < Num2; b++) {
      let x = Begin + a * (Gap * 4);
      let y = Begin + b * (Gap * 4);

      strokeWeight(2);
      let randomColor = random(colors);
      stroke(randomColor);
      ellipse(x, y, 2 * Gap);
    }
  }
  for (let a = 0; r < Num; a++) {
    for (let b = 0; b < Num2; b++) {
      push();
      translate();
      rotate();
      pop();
    }
  }

  angleBegin += angleBeginVel;
}
