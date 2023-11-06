let particle;
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background('pink');
}
function draw() {
  if (particle.isDead()) {
    particle = new Particle(width / 2, 20);
  }

  particle.applyForce(gravity);
  particle.update();
  background('pink');
  particle.display();
}
