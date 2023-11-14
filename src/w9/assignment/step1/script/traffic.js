class Traffic {
  //Traffic 이라는 이름의 class 생성
  constructor() {
    //초기설정
    this.vehicles = [];
  }

  run() {
    //화면
    this.vehicles.forEach((eachVehicle) => {
      let sepForce = eachVehicle.separate(this.vehicles);
      eachVehicle.applyForce(sepForce);
      let cohForce = eachVehicle.cohesion(this.vehicles);
      eachVehicle.applyForce(cohForce);
      let aliForce = eachVehicle.align(this.vehicles);
      eachVehicle.applyForce(aliForce);
      eachVehicle.update();
      eachVehicle.borderInfinite();
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    this.vehicles.push(
      new Vehicle(x, y, 1, 10, 5, 0.1, color(random(360), 100, 50))
    );
  }
}
