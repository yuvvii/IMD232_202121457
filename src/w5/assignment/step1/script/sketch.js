const stripeNum = 8;
const stripeNum2 = 8;
const stripeGap = 40;
const margin = stripeGap / 2;

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

  for (let a = 0; a < stripeNum; a++) {
    for (let b = 0; b < stripeNum2; b++) {
      let x = map(a, 0, stripeNum - 1, stripeGap, width - stripeGap);
      let y = map(b, 0, stripeNum2 - 1, stripeGap, height - stripeGap);

      noFill();
      strokeWeight(1);
      let randomColor = random(colors);
      stroke(randomColor);

      ellipse(x, y, stripeGap);
      line(x, y);
    }
  }
  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      push();
      translate();
      rotate();
      pop();
    }
  }

  angleBegin += angleBeginVel;
}
