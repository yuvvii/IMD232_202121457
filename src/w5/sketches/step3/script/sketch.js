const stripeNum = 20;
const stripeNum2 = 15;
const stripeBegin = 15;
const stripeGap = 30;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background('pink');
}
function draw() {
  background('pink');
  noStroke();
  fill('green');
  // for (let a = 0; a < stripeNum; a++) {
  //   const rectWidth = width / (stripeNum + stripeNum + 1);
  //   const rectX = (width / (stripeNum + stripeNum + 1)) * (2 * a + 1);
  //   rect(rectX, 0, rectWidth, height);
  // }

  // for (let a = 0; a < stripeNum; a++) {
  //   const rectHeight = height / (stripeNum + stripeNum + 1);
  //   const rectY = (height / (stripeNum + stripeNum + 1)) * (2 * a + 1);
  //   rect(0, rectY, width, rectHeight);
  // }

  // for (let a = stripeBegin; a < width; a += 2 * stripeGap) {
  //   rect(a, 0, stripeGap, height);
  // }
  rectMode(CENTER);
  for (let a = 0; a < stripeNum; a++) {
    for (let b = 0; b < stripeNum2; b++) {
      fill((255 / stripeNum) * a, (255 / stripeNum2) * b, 255);
      let x = ((a + 1) * width) / (stripeNum + 1);
      let y = ((b + 1) * height) / (stripeNum2 + 1);
      if (a % 2 == 0) {
        ellipse(x, y, 10);
      } else {
        rect(x, y, 10);
      }
    }
  }
}
