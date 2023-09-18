function setup() {
  setCanvasContainer('canvas-goes-here', 500, 300, true);
  background('#ff7733');
}

function draw() {
  background('#ff7733');
  circle(mouseX, mouseY, width * 0.1);
}
