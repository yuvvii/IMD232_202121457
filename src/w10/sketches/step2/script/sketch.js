// let particle;
let particleArray = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // // particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background('pink');
}
function draw() {
  // if (particle.isDead()) {
  // // particle = new Particle(width / 2, 20);
  // }
  particleArray.push(new Particle(width / 2, 20));

  // particle.applyForce(gravity);
  // particle.update();

  background('pink');
  for (let a = 0; a < particleArray.length; a++) {
    particleArray[a].applyForce(gravity);
    particleArray[a].update();
    particleArray[a].display();
  }
  // particle.display();
  for (let a = particleArray.length - 1; a >= 0; a--) {
    if (particleArray[a].isDead()) {
      particleArray.splice(a, 1);
    }
  }
}
