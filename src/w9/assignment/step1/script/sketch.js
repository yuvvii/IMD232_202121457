const oWidth = 800;
const oHeight = 800;

//matter 쓰기 위한 기본 변수
const {
  Body: MatterBody,
  Engine,
  Render,
  Runner,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
  Common,
  Vertices,
} = Matter;

// decomp 생성
Common.setDecomp(decomp);

// create engine
const engine = Engine.create(),
  world = engine.world;

// create runner
const runner = Runner.create();

//draw에서도 쓸 수 있게 변수 선언
let group;
let ropeA;
let ropeB;
let ropeC;
let mouse;

function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);

  //다각형 생성
  const A = [
    { x: 326 / 4, y: 260 / 4 },
    { x: 262 / 4, y: 244 / 4 },
    { x: 228 / 4, y: 190 / 4 },
    { x: 228 / 4, y: 128 / 4 },
    { x: 270 / 4, y: 80 / 4 },
    { x: 330 / 4, y: 76 / 4 },
    { x: 374 / 4, y: 118 / 4 },
    { x: 398 / 4, y: 176 / 4 },
    { x: 388 / 4, y: 234 / 4 },
    { x: 348 / 4, y: 280 / 4 },
    { x: 302 / 4, y: 318 / 4 },
    { x: 244 / 4, y: 334 / 4 },
  ];

  const B = [
    { x: 150 / 3, y: 262 / 4 },
    { x: 136 / 3, y: 204 / 4 },
    { x: 148 / 3, y: 142 / 4 },
    { x: 206 / 3, y: 138 / 4 },
    { x: 224 / 3, y: 194 / 4 },
    { x: 246 / 3, y: 140 / 4 },
    { x: 280 / 3, y: 190 / 4 },
    { x: 264 / 3, y: 246 / 4 },
    { x: 210 / 3, y: 270 / 4 },
    { x: 158 / 3, y: 298 / 4 },
  ];

  const C = [
    { x: 200 / 4, y: 100 / 3 },
    { x: 250 / 4, y: 50 / 3 },
    { x: 300 / 4, y: 100 / 3 },
    { x: 325 / 4, y: 150 / 3 },
    { x: 300 / 4, y: 200 / 3 },
    { x: 250 / 4, y: 250 / 3 },
    { x: 200 / 4, y: 200 / 3 },
    { x: 175 / 4, y: 150 / 3 },
    { x: 225 / 4, y: 125 / 3 },
    { x: 275 / 4, y: 125 / 3 },
  ];

  const V = (vertices) => {
    return vertices.map((vertex) => ({
      x: vertex.x + Math.random() * 9,
      y: vertex.y + Math.random() * 6,
    }));
  };

  const bodyA = decomp.quickDecomp(A);
  const bodyB = decomp.quickDecomp(B);
  const bodyC = decomp.quickDecomp(C);

  // add bodies
  group = MatterBody.nextGroup(true);

  ropeA = Composites.stack(100, 30, 8, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, V(A), {
      collisionFilter: { group: group },
    });
  });
  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = MatterBody.nextGroup(true);

  ropeB = Composites.stack(400, 30, 10, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x - 20, y, V(B), {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = MatterBody.nextGroup(true);

  ropeC = Composites.stack(700, 30, 13, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x - 20, y, V(C), {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });

  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.8,
    })
  );

  // 요소를 world에 추가
  Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Bodies.rectangle(400, 800, 1200, 50.5, { isStatic: true }),
  ]);

  // add mouse control
  mouse = Mouse.create(document.querySelector('.p5Canvas'));
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

  Composite.add(world, mouseConstraint);
  Runner.run(runner, engine);

  background(255, 204, 220);
}

function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;
  background(255, 204, 220);

  // Draw ropeA
  stroke(218, 39, 133);
  fill(255, 20, 177);
  drawParts(ropeA);

  // Draw ropeB
  stroke(77, 135, 211);
  fill(86, 169, 255);
  drawParts(ropeB);

  // Draw ropeC
  stroke(108, 39, 218);
  fill(166, 87, 255);
  drawParts(ropeC);
}

function drawParts(rope) {
  rope.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / oWidth) * width,
          (eachVertex.y / oHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });
}
