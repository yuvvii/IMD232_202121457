class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(3, 0);
    this.vel.rotate((TAU / 360) * random(-360, 0));
    this.acc = createVector(0, 0);
    this.rad = 4;
    this.lifeSpan = 60;
    this.mass = 10;
    this.color = color(random(360), random(70, 100), random(70, 100), 100);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 1;

    let alpha = map(this.lifeSpan, 0, 40, 0, 100);
    this.color.setAlpha(alpha);
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
