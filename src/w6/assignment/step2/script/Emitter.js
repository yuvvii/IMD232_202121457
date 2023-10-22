class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y);
  }
  addParticle() {
    this.particles.push(new Particle(this.pos.x, this.pos.y));
  }

  update(gravity) {
    for (let a = this.particles.length - 1; a >= 0; a--) {
      this.particles[a].applyForce(gravity);
      this.particles[a].update();
      if (this.particles[a].isDead()) {
        this.particles.splice(a, 1);
      }
    }
  }

  display() {
    for (let a = 0; a < this.particles.length; a++) {
      this.particles[a].display();
    }
  }
}
