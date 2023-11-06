class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y);
  }
  addParticle() {
    this.particles.push(
      new Particle(this.pos.x, this.pos.y, random(1, 16), random(180, 300))
    );
  }

  applyRepeller(repeller) {
    this.particles.forEach((eachParticle, idx) => {
      const force = repeller.repel(eachParticle);
      eachParticle.applyForce(force);
    });
  }

  applyGravity(gravity) {
    for (let eachParticle of this.particles) {
      const force = p5.Vector.mult(gravity, eachParticle.mass);
      eachParticle.applyForce(force);
    }
  }

  update(gravity) {
    for (let a = this.particles.length - 1; a >= 0; a--) {
      this.particles[a].update();
      if (this.particles[a].isDead()) {
        this.particles.splice(a, 1);
      }
    }
  }

  display() {
    // for (let a = 0; a < this.particles.length; a++) {
    //   this.particles[a].display();
    // }
    this.particles.forEach((eachParticle) => {
      eachParticle.display();
    });
  }
}
