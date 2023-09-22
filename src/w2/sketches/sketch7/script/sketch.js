function setup() {
  setCanvasContainer('canvas-goes-here', 500, 300, true);
  background(255, 0, 0);
}

function draw() {
  background(255, 0, 0);
  circle(mouseX, mouseY, width * 0.1);
}
