let pos;
let vel;
//가속도
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  //임의의 방향으로 1만큼 벡터 만들기 1
  // vel = createVector(0, 1);
  // vel.rotate(random(TAU));

  //임의의 방향으로 1만큼 벡터 만들기 2
  vel = p5.Vector.random2D();
  // vel.mult(5);
  vel.mult(0);

  acc = createVector(0, 0.1);
}

function draw() {
  background('white');

  // //속도에 매번 가속도가 더해지게
  // vel.add(acc);

  // //속도에 제한 걸기
  // vel.limit(20);
  // pos.add(vel);

  // if (pos.x < 0) {
  //   pos.x += width;
  // } else if (pos.x >= width) {
  //   pos.x -= width;
  // }
  // if (pos.y < 0) {
  //   pos.y += height;
  // } else if (pos.y >= height) {
  //   pos.y -= height;
  // }
  // ellipse(pos.x, pos.y, 2 * radius);

  update();
  infiniteEdge();
  display();
}

function update() {
  vel.add(acc);
  vel.limit(20);
  pos.add(vel);
}

function infiniteEdge() {
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
}

function display() {
  ellipse(pos.x, pos.y, 2 * radius);
}
