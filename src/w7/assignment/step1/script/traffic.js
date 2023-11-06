class Traffic {
  //Traffic 이라는 이름의 class 정의
  constructor() {
    //초기설정
    this.vehicles = [];
    //vehicles에 array 생성, 배열 초기화
  }

  run() {
    //화면에 업데이트 내용 표시
    this.vehicles.forEach((eachVehicle) => {
      //vehicles 객체 각각에 반복
      let sepForce = eachVehicle.separate(this.vehicles);
      // sepForce를 선언하고 객체를 분리하는, 퍼트리는 힘을 계산한 값으로 지정
      eachVehicle.applyForce(sepForce);
      //계산된 힘을 eachVehicle에 적용
      let cohForce = eachVehicle.cohesion(this.vehicles);
      // cohForce를 선언하고 객체가 모이는 힘, 객체들의 평균위치 계산
      eachVehicle.applyForce(cohForce);
      //계산된 힘을 eachVehicle에 적용
      let aliForce = eachVehicle.align(this.vehicles);
      // aliForce를 선언하고 각각의 객체를 정렬하는 힘을 계산
      eachVehicle.applyForce(aliForce);
      //계산된 힘을 eachVehicle에 적용
      eachVehicle.update();
      //eachVehicle를 update 한다.
      eachVehicle.borderInfinite();
      //객체들이 화면 경계를 넘지 않도록 조정
      eachVehicle.display();
      //eachVehicle를 display 한다.
    });
  }

  addVehicle(x, y) {
    //x,y 위치에 초기값 생성, 배열에 추가
    this.vehicles.push(
      new Vehicle(x, y, 1, 10, 5, 0.1, color(random(360), 100, 50))
    );
    //새로 추가되는 Vehicle의 값을 지정
  }
}
