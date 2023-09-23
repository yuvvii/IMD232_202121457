function setup() {
  setCanvasContainer('canvas', 500, 300, true);
  background(255);
}

function draw() {
  background(255);

  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);

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
