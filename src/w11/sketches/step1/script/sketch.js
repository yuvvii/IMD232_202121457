let cam;

function setup() {
  setCanvasContainer('canvas', 4, 3, true);
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  background('pink');
  image(cam, 0, 0, width, (cam.height / cam.width) * width);
}
