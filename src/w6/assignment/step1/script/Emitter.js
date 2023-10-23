class Emitter {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 1);
    this.acc = createVector(0, 0);
    this.rad = 6;
    this.lifeSpan = 512;
    colorMode(HSL, 360, 100, 100);
    this.color = color(random(360), random(70, 100), random(70, 100));
    this.angle = random(360);
    this.rotationSpeed = random(-0.1, 0);
  }

  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 2;
    this.angle += this.rotationSpeed;
  }

  display() {
    noStroke();
    fill(this.color);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    rect(0, 0, this.rad * 2, this.rad * 2);
    pop();
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
