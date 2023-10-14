// let x;
// let y;
let pos;
// let xAdd = 5;
// let yAdd = 3;
let vel;
let radius = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  //   x = width / 2;
  //   y = height / 2;
  pos = createVector(width / 2, height / 2);
  vel = createVector(5, 3);
}
function draw() {
  background('white');
  //   x += xAdd;
  //   y += yAdd;
  // pos.x += vel.x; pos.y += vel.y;
  pos.add(vel);

  //   if (x < 0) {
  //     x += width;
  //   } else if (x >= width) {
  //     x -= width;
  //   }
  //   if (y < 0) {
  //     y += height;
  //   } else if (y >= height) {
  //     y -= height;
  //   }
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
  //   ellipse(x, y, 2 * radius);
  ellipse(pos.x, pos.y, 2 * radius);
}
