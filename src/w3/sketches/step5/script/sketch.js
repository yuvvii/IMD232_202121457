// let x;
// let y;
let p = {};
// let velocityX = 3;
// let velocityY = 5;
let v = {
  x: 3,
  y: 5,
};

function setup() {
  setCanvasContainer('canvas', 500, 300, true);
  background(255);
  // x = width / 2.0;
  // y = height / 2.0;
  p.x = width / 2;
  p.y = height / 2;
  console.log('p', p);
  console.log('v', v);
}

function draw() {
  background(255);
  //   x += velocityX;
  //   y += velocityY;
  p.x += v.x;
  p.y += v.y;

  //   ellipse(x, y, 50);
  ellipse(p.x, p.y, 50);

  //   if (x < 0 || x > width) {
  //     velocityX *= -1;
  //   }
  //   if (y < 0 || y > height) {
  //     velocityY *= -1;
  //   }

  if (p.x < 0 || p.x > width) {
    v.x *= -1;
  }
  if (p.y < 0 || p.y > height) {
    v.y *= -1;
  }
}
