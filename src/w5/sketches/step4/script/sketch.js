// let aMover;
let movers = [];
let mVec;
let moversNum = 1000;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  //   aMover = new Mover(width / 2, height / 2, 10, 25, 'cornflowerblue');
  colorMode(HSL, 360, 100, 100, 100);
  for (let a = 0; a < moversNum; a++) {
    movers.push(
      new Mover(
        random(width),
        random(height),
        10,
        25,
        color(random(360), 100, 50, 25)
      )
    );
  }

  mVec = createVector();

  background('pink');
}

function draw() {
  mVec.set(mouseX, mouseY);

  //   const dirVec = p5.Vector.sub(mVec, aMover.pos);
  //   dirVec.setMag(0.5);
  //   aMover.applyForce(dirVec);
  //   aMover.update();

  for (let a = 0; a < movers.length; a++) {
    const dirVec = p5.Vector.sub(mVec, movers[a].pos);
    dirVec.setMag(0.5);
    movers[a].applyForce(dirVec);
    movers[a].update();
  }

  background('pink');

  //   for (let a = 0; a < movers.length; a++) {
  //     movers[a].display();
  //     movers[a].displayVectors();
  //   }
  movers.forEach((anyName) => {
    anyName.display();
    anyName.displayVectors();
  });
}
