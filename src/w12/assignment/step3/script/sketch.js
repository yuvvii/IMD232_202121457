function setup() {
  createCanvas(800, 200);
}

function draw() {
  background(255);

  // 가로로 길게 용수철처럼 구불거리는 선 그리기
  drawWavyLine(100, height / 2, 700, 0.09, 25);
}

function drawWavyLine(x, y, length, frequency, amplitude) {
  stroke(40);
  strokeWeight(20);

  beginShape();
  for (let i = 0; i < length; i += 5) {
    let xpos = x + i;
    let ypos = y + cos(i * frequency) * amplitude;
    vertex(xpos, ypos);
  }
  endShape();
}
