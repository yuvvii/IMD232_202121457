function setup() {
  setCanvasContainer('p5-canvas', 700, 500);
  background('#ffdee7');
}

function draw() {
  background('#ffdee7');
  rectMode(CORNER);
  colorMode(RGB);
  stroke(0);
  strokeWeight(1);
  fill('#fafad2');
  rect(0, 320, 700);

  fill('white');
  rect(0, 320, 700, 20);

  stroke(1);
  strokeWeight(1);
  line(0, 360, 700, 360);
  line(0, 380, 700, 380);
  line(0, 400, 700, 400);
  line(0, 420, 700, 420);
  line(0, 440, 700, 440);
  line(0, 460, 700, 460);
  line(0, 480, 700, 480);

  stroke(0);
  strokeWeight(1);

  //rug
  fill('#ffa4d4');
  quad(130, 350, 470, 350, 510, 440, 90, 440);

  translate(10, 0);
  //window
  fill('#59ef8b');
  rect(380, 30, 240, 160, 5, 5, 5, 5);
  fill('#8dfccd');
  rect(390, 40, 220, 140);
  // fill('black');
  // rect(390, 40, 220, 5);
  // fill('black');
  // rect(390, 190, 220, 5);

  //cloud
  fill('white');
  noStroke();
  rect(480, 70, 70, 50, 50);
  rect(520, 100, 60, 30, 50);
  rect(520, 60, 70, 60, 50);

  //curtain
  stroke(0);
  strokeWeight(1);
  fill('#f0e68c');
  rect(580, 130, 30, 100, 0, 0, 0, 10);
  rect(590, 130, 20, 100, 0, 0, 0, 5);
  rect(600, 130, 20, 100, 0, 0, 0, 5);

  rect(380, 130, 20, 100, 0, 0, 100, 0);
  rect(400, 130, 20, 100, 0, 0, 100, 0);
  rect(410, 130, 10, 100, 0, 0, 100, 0);

  rect(385, 30, 60, 110, 0, 0, 100, 0);
  rect(380, 30, 50, 120, 0, 0, 100, 0);
  rect(380, 30, 40, 120, 0, 0, 100, 0);
  rect(380, 30, 20, 120, 0, 0, 100, 0);

  rect(555, 30, 50, 110, 0, 0, 0, 100);
  rect(570, 30, 50, 120, 0, 0, 0, 100);
  rect(570, 30, 50, 120, 0, 0, 0, 100);
  rect(580, 30, 40, 120, 0, 0, 0, 100);
  rect(600, 30, 20, 120, 0, 0, 0, 100);

  fill('#ff66e2');
  rect(375, 20, 250, 20, 5, 5, 5, 5);
  ellipse(400, 150, 50, 15);
  ellipse(600, 150, 50, 15);
  line(380, 30, 370 + 250, 30);

  translate(0, 30);
  //book
  rectMode(CORNER);

  fill('#f987e8');
  rect(345, 80, 5, 30, 3);
  rect(230, 80, 5, 30, 3);

  fill('#59ef8b');
  rect(235, 50, 20, 60, 3);
  fill('#f0e68c');
  rect(240, 60, 10, 40, 3);

  fill('#f0e68c');
  rect(255, 47, 20, 63, 3);
  fill('#c2ffd6');
  rect(260, 57, 10, 43, 3);

  fill('#c2ffd6');
  rect(275, 50, 10, 60, 3);

  fill('#ff66e2');
  rect(285, 50, 20, 60, 3);
  fill('#8dfccd');
  rect(290, 60, 10, 40, 3);

  //선인장
  fill('#59ef8b');
  ellipse(325, 70, 30, 25, 3);
  fill('#fcfc8d');
  rect(309, 75, 32, 26, 5, 3);
  rect(307, 75, 36, 10, 2, 3);
  line(330, 55, 327, 60);
  line(320, 55, 322, 60);
  line(337, 58, 334, 62);
  line(312, 58, 317, 62);

  fill('#f987e8');
  rect(230, 100, 120, 10);

  rectMode(CORNER);
  translate(-10, -10);
  //clock
  fill('#66ff9d');
  rect(140, 50, 50, 50, 3);

  fill('#fcfc8d');
  triangle(130, 60, 200, 60, 165, 25);
  fill('#ff66e2');
  rect(155, 40, 20, 30, 10, 10, 0, 0);

  fill('#fcfc8d');
  ellipse(165, 75, 40);
  line(165, 40, 165, 55);

  fill('#66ff9d');

  rect(163, 75, 4, 15, 3);
  rect(163, 65, 4, 15, 3);

  fill('#ff66e2');
  ellipse(165, 75, 10);

  rect(160, 100, 4, 25);
  rect(170, 100, 4, 35);

  fill('#fcfc8d');
  ellipse(162, 125, 10);
  ellipse(172, 135, 10);

  translate(10, 50);
  //sofa
  rectMode(CENTER);

  fill('#66ff9d');
  rect(300, 200, 200, 100, 30, 30, 0, 0);
  line(300, 180, 300, 230);

  //cushion
  fill('#ff66e2');
  ellipse(360, 220, 100);
  fill('#ff00db');
  ellipse(360, 220, 10);

  //line
  line(340, 200, 350, 210);
  line(380, 200, 370, 210);
  line(340, 240, 350, 230);
  line(380, 240, 370, 230);

  //leg
  fill('#f0e68c');
  rect(190, 310, 20, 40, 15);
  rect(410, 310, 20, 40, 15);

  fill('#59ef8b');
  ellipse(250, 210, 10);
  rect(410, 240, 40, 80, 15);
  rect(190, 240, 40, 80, 15);
  rect(300, 280, 260, 60, 15);
  line(200, 300, 400, 300);

  rectMode(CENTER);

  translate(0, 0);
  //lamp
  // fill('black');
  // rect(90, 330, 100, 20, 10);
  fill('#c2ffd6');
  rect(90, 324, 100, 15, 0, 0, 10, 10);
  fill('#59ef8b');
  ellipse(90, 315, 100, 10);
  fill('#c2ffd6');
  rect(90, 200, 10, 230, 5);

  fill('black');
  ellipse(90, 140, 100, 20);

  fill('#fcfc8d');
  ellipse(90, 130, 45);

  fill('#f987e8');
  quad(60, 70, 120, 70, 140, 140, 40, 140);

  rectMode(CORNER);
  fill('#ff66e2');
  rect(55, 60, 70, 10, 5);
  rect(35, 110, 110, 15, 10);
  line(70, 75, 65, 110);
  line(110, 75, 115, 110);
  line(90, 75, 90, 110);

  translate(0, 25);
  rectMode(CENTER);
  //leg
  fill('#f0e68c');
  rect(450, 270, 10, 120, 15);
  rect(570, 270, 10, 120, 15);

  //desk
  fill('#ffa4d4');
  rect(510, 210, 150, 30, 5);
  ellipse(510, 200, 175, 20, 5);

  //cup
  fill('#c2ffd6');
  rect(490, 175, 30, 40, 0, 0, 7, 7);
  fill('#f987e8');
  ellipse(490, 170, 8);
  ellipse(495, 175, 8);
  ellipse(485, 175, 8);
  ellipse(490, 180, 8);

  fill('#c2ffd6');
  rect(510, 185, 10, 10, 0, 0, 3, 0);
  rect(510, 165, 10, 10, 0, 0, 3, 0);
  rect(515, 175, 10, 30, 0, 3, 3, 0);

  fill('#fcfc8d');
  ellipse(490, 175, 8);
  fill('black');
  ellipse(490, 155, 30, 5);

  //flower
  line(540, 120, 540, 180);
  fill('#66ff9d');
  ellipse(540, 110, 10, 20);
  ellipse(540, 110, 10, 20);
  ellipse(540, 130, 10, 20);
  ellipse(530, 120, 20, 10);
  ellipse(550, 120, 20, 10);

  fill('#fcfc8d');
  ellipse(540, 120, 10);

  //vase
  fill('#fcfc8d');
  rect(540, 160, 15, 25);
  ellipse(540, 180, 35);
}
