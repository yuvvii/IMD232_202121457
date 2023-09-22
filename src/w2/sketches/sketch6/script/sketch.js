function setup() {
  let canvas;
  canvas = createCanvas(500, 500);
  let canvasParent = select('#canvas-goes-here');
  canvas.parent(canvasParent);
}

function draw() {
  background('pink');
  circle(mouseX, mouseY, 100);
}
