class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 1);
    // this.vel.rotate((TAU / 360) * random(360));
    this.mass = 10;
    this.acc = createVector(0, 0);
    this.rad = 10;
    this.lifeSpan = 60;
    colorMode(HSL, 360, 100, 100);
    this.color = color(random(360), random(70, 100), random(70, 100));
  }

  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 1;
    this.vel.normalize();
  }

  display() {
    noStroke();
    fill(this.color, this.lifeSpan);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
