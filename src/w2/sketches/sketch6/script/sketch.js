function setup() {
  let canvas;
  canvas = createCanvas(500, 500);
  let canvasParent = select('#canvas-goes-here');
  canvas.parent(canvasParent);
}

function draw() {
  background(255, 0, 0);
  circle(mouseX, mouseY, 100);
}
