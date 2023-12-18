let particles = [];
const canvasPercentage = 80; // Adjust this percentage based on your layout needs
const oWidth = window.innerWidth * (canvasPercentage / 100);
const oHeight = window.innerHeight * (canvasPercentage / 100);
let rectWidthPercentage = 90; // 네모의 가로 길이의 백분율
let rectHeightPercentage = 80; // 네모의 세로 길이의 백분율

let aShapeXPercentage; // A 도형의 x 좌표의 백분율
let aShapeYPercentage; // A 도형의 y 좌표의 백분율

function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);

  // A 도형 초기 설정
  aShapeXPercentage = 6;
  aShapeYPercentage = 93;
}

function draw() {
  background('#FFEE72');

  let activeParticles = 0; // 투명도가 0이 아닌 파티클 개수

  // 네모 그리기
  fill('#FFEDDD'); // 네모의 채우기 색 설정
  noStroke();

  rectMode(CENTER);
  rect(
    (width * (canvasPercentage / 80)) / 2,
    (height * (canvasPercentage / 80)) / 2 - 50,
    width * (rectWidthPercentage / 100),
    height * (rectHeightPercentage / 100),
    20
  );

  // 생성된 particle들을 그림
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();

    // 투명도가 80 이상인 파티클 감지
    if (particles[i].color.levels[3] >= 80) {
      activeParticles++;
    }
    console.log('Active Particles', activeParticles);

    // 일정 시간이 지나면 투명도를 줄여서 사라지게 함
    if (millis() - particles[i].startTime > 2000) {
      particles[i].color.levels[3] -= 2;
      particles[i].color.levels[3] = constrain(
        particles[i].color.levels[3],
        0,
        255
      );
    }

    // 투명도가 0이 되면 배열에서 제거
    if (particles[i].color.levels[3] === 0) {
      particles.splice(i, 1);
    }
  }

  // 마우스가 캔버스 내부에 있는 경우에만 새로운 파티클 생성
  if (isMouseInsideCanvas()) {
    // 파티클 생성
    if (random() > 0.5) {
      let particle = new CustomParticle(
        constrain(
          mouseX,
          (width * (canvasPercentage / 100)) / 2 -
            width * (rectWidthPercentage / 200) +
            30,
          (width * (canvasPercentage / 100)) / 2 +
            width * (rectWidthPercentage / 200) -
            30
        ),
        constrain(
          mouseY,
          (height * (canvasPercentage / 100)) / 2 -
            height * (rectHeightPercentage / 200),
          (height * (canvasPercentage / 100)) / 2 +
            height * (rectHeightPercentage / 200) -
            90
        )
      );
      particles.push(particle);
    }
  }

  for (let i = 0; i < 10; i++) {
    drawCircle2(
      182 + (i * (width * (canvasPercentage / 100))) / 61,
      (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100 + 6,
      10
    );
  }

  // A 도형 그리기
  noStroke();
  fill('#FFEE72');
  rect(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100 - 280,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100,
    (width * 600) / 800,
    (height * 40) / 700
  );

  fill('#4E1D00');
  ellipse(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100 + 30,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100 - 20,
    (width * 20) / 800
  );
  ellipse(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100 - 30,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100 - 20,
    (width * 20) / 800
  );
  ellipse(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100 - 40,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100 - 10,
    (width * 20) / 800
  );
  ellipse(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100 + 40,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100 - 10,
    (width * 20) / 800
  );
  ellipse(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100 - 50,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100 + 1,
    (width * 15) / 800
  );
  ellipse(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100 + 50,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100 + 1,
    (width * 15) / 800
  );

  fill('#FFCAAA');
  ellipse(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100 + 3,
    (width * 60) / 800,
    (height * 55) / 700
  );

  fill('#4E1D00');
  arc(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100,
    (width * 65) / 800,
    (height * 62) / 700,
    radians(160),
    0.3
  );
  ellipse(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100 + 5,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100 + 10,
    (width * 4) / 800,
    (height * 6) / 700
  );
  ellipse(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100 - 5,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100 + 10,
    (width * 4) / 800,
    (height * 6) / 700
  );

  fill('#FF4D4D');
  ellipse(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100 + 18,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100 + 15,
    (width * 10) / 800,
    (height * 8) / 700
  );
  ellipse(
    (aShapeXPercentage * (width * (canvasPercentage / 100))) / 100 - 18,
    (aShapeYPercentage * (height * (canvasPercentage / 100))) / 100 + 15,
    (width * 10) / 800,
    (height * 8) / 700
  );

  // A 도형 이동 로직
  let targetX = map(
    activeParticles,
    0,
    400,
    (width * 160) / 800,
    (width * 800) / 800
  );
  aShapeXPercentage += (targetX - aShapeXPercentage) * 0.05;

  aShapeXPercentage = constrain(
    aShapeXPercentage,
    (width * 160) / 800,
    (width * 800) / 800
  );

  // 가로로 길게 용수철처럼 구불거리는 선 그리기
  drawWavyLine(
    (175 * (width * (canvasPercentage / 100))) / 800,
    (80 * (height * (canvasPercentage / 100))) / 700,
    (626 * (width * (canvasPercentage / 100))) / 800,
    0.1,
    (15 * (height * (canvasPercentage / 100))) / 700
  );
}

function drawCircle2(x, y, diameter) {
  fill('#B6DBEF');
  noStroke(0);
  ellipse(x, y, diameter, diameter);
}

function drawWavyLine(x, y, length, frequency, amplitude) {
  stroke('#90D9E8');
  noFill();
  strokeWeight((15 * (height * (canvasPercentage / 100))) / 700);

  beginShape();
  for (let i = 0; i < length; i += 1) {
    let xpos = x + i;
    let ypos = y + cos(i * frequency) * amplitude;
    vertex(xpos, ypos);
  }
  endShape();
}

// 마우스가 캔버스 내부에 있는지 확인하는 함수
function isMouseInsideCanvas() {
  return mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;
}

// CustomParticle 클래스 정의
class CustomParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(
      random(180, 360),
      random(120, 360),
      random(100, 360),
      random(170, 360)
    );
    this.numShapes = 6; // 도형의 개수
    this.startTime = millis(); // 생성 시간 저장
  }

  update() {
    // 움직임 로직 추가 (예: 마우스 위치로 이동)
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  display() {
    fill(
      this.color.levels[0],
      this.color.levels[1],
      this.color.levels[2],
      this.color.levels[3]
    );

    // 주어진 도형의 파티클 그리기
    push();
    translate(this.x, this.y);
    rotate(radians(90));

    // noStroke();

    for (let i = 0; i < this.numShapes; i++) {
      rotate(radians(60));
      ellipse((width * 8) / 800, 0, (width * 12) / 800, (height * 10) / 700);
    }
    pop();
  }
}

function isInsideRect(x, y, rectX, rectY, rectWidth, rectHeight) {
  return (
    x > rectX - rectWidth / 2 &&
    x < rectX + rectWidth / 2 &&
    y > rectY - rectHeight / 2 &&
    y < rectY + rectHeight / 2
  );
}

function mouseMoved() {
  // 마우스가 캔버스 내부에 있는 경우에만 새로운 파티클 생성
  if (isMouseInsideCanvas() && random() > 0.5) {
    let particle = new CustomParticle(
      constrain(
        mouseX,
        (width * (canvasPercentage / 100)) / 2 -
          width * (rectWidthPercentage / 200) +
          30,
        (width * (canvasPercentage / 100)) / 2 +
          width * (rectWidthPercentage / 200) -
          30
      ),
      constrain(
        mouseY,
        (height * (canvasPercentage / 100)) / 2 -
          height * (rectHeightPercentage / 200),
        (height * (canvasPercentage / 100)) / 2 +
          height * (rectHeightPercentage / 200) -
          90
      )
    );
    particles.push(particle);
    mouse.pixelRatio = (pixelDensity() * width) / oWidth;
  }
}
