class Vehicle {
  //Vehicle 이라는 이름의 class 정의
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    //초기설정
    this.pos = createVector(x, y); // 위치
    this.vel = p5.Vector.random2D(); // 랜덤값의 초기 속력
    this.acc = createVector(); // 가속도 초기화
    this.mass = mass; // 질량
    this.rad = rad; // 반지름
    this.speedMx = speedMx; // 최대속도
    this.forceMx = forceMx; // 최대 힘
    this.neighborhooodRad = 50;
    // 주변 객체의 rad = 인접한 객체간의 거리 = 50
    this.color = color; // 객체 색상
  }

  cohesion(others) {
    //객체가 모이는 힘, 객체들의 평균위치 계산
    let cnt = 0;
    // 주변 객체의 개수를 추적하는 변수 초기화
    const steer = createVector(0, 0);
    // 평균 위치로 향하는 벡터 초기화
    others.forEach((each) => {
      // 자신 주변의 객체에 대한 제곱 계산, 거리 계산
      if (each !== this) {
        // 자신을 제외
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // this 객체와 다른 객체 사이의 거리 제곱 계산
        if (distSq < this.neighborhooodRad ** 2) {
          // 거리가 주변 객체의 반지름 제곱 이하일 경우
          // 주변 객체의 반지름 제곱 = 인접한 객체로 인식하는 거리의 제곱
          steer.add(each.pos);
          //평균 위치에 다른 객체들의 위치를 더함
          cnt++;
          //cnt 1씩 증가
        }
      }
    });
    if (cnt > 0) {
      // cnt가 0보다 클 때
      // 주변 객체가 존재할 때 평균위치를 계산, 힘을 조정
      steer.div(cnt);
      // 계산된 힘을 객체 개수로 나눠서 평균 위치 계산
      steer.sub(this.pos);
      // 현재 위치에서 평균 위치를 빼서 방향 계산
      steer.setMag(this.speedMx);
      // 힘의 크기를 최대 속도로 설정
      steer.sub(this.vel);
      // 현재 속도에서 평균 위치 힘을 뺀다.
      steer.limit(this.forceMx);
      //힘의 크기를 최대 힘으로 제한
    }
    return steer;
    //계산된 방향 값 반환
  }

  align(others) {
    //객체를 정렬하는 힘 계산
    let cnt = 0;
    // 주변 객체의 개수를 추적하는 변수 초기화
    const steer = createVector(0, 0);
    // 정렬하는 힘 벡터 초기화
    others.forEach((each) => {
      // this 객체와 other 객체 간의 거리 제곱을 계산
      if (each !== this) {
        // 자신을 제외
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        //this 객체와 다른 객체 간의 거리의 제곱 계산
        if (distSq < this.neighborhooodRad ** 2) {
          // 거리가 주변 객체의 반지름 제곱 이하일 경우
          // 주변 객체의 반지름 제곱 = 인접한 객체로 인식하는 거리의 제곱
          steer.add(each.vel);
          // 해당 객체의 속도를 정렬하는 힘에 더한다.
          cnt++;
          // cnt 1씩 증가
        }
      }
    });
    if (cnt > 0) {
      // cnt가 0보다 클 때
      // 주변 객체가 존재할 때 평균위치를 계산, 힘을 조정
      steer.div(cnt);
      // 계산된 힘을 객체 개수로 나눠서 속도의 평균 계산
      steer.setMag(this.speedMx);
      // 힘의 크기를 최대 속도로 설정
      steer.sub(this.vel);
      // 현재 속력에서 정렬하는 힘을 뺀다.
      steer.limit(this.forceMx);
      // 힘의 크기를 최대 힘으로 제한
    }
    return steer;
    //계산한 정렬하는 힘을 반환
  }
  separate(others) {
    // 객체를 퍼트리는 힘, 다른 객체와의 거리 계산
    let cnt = 0;
    // 주변 객체의 개수를 추적하는 변수 초기화
    const steer = createVector(0, 0);
    // 퍼트리는 힘 벡터 초기화
    others.forEach((each) => {
      if (each !== this) {
        // 자신을 제외한 다른 객체와의 작동 계산
        const dist = this.pos.dist(each.pos);
        // 현재 객체와 다른 객체간의 거리 계산
        if (dist > 0 && this.rad + each.rad > dist) {
          // 객체들이 충돌할 경우
          const distNormal = dist / (this.rad + each.rad);
          // 현재 객체와 다른 객체간의 거리를 두 객체의 반지름 합으로 정규화
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          // 다른 객체에서 현재 객체로 향하는 벡터 생성, this.pos - each.pos
          towardMeVec.setMag(1 / distNormal);
          // 벡터의 크기를 위에서 정규화한 거리로 설정
          steer.add(towardMeVec);
          // 퍼트리는 힘에 방향 벡터를 더한다.
          cnt++;
          // cnt 1씩 증가
        }
      }
    });
    if (cnt > 0) {
      // cnt가 0보다 클 때
      // 주변 객체가 존재할 때 평균위치를 계산, 힘을 조정
      steer.div(cnt);
      // 계산된 힘을 객체 개수로 나눠서 속도의 평균 계산
      steer.setMag(this.speedMx);
      // 힘의 크기를 최대 속도로 설정
      steer.sub(this.vel);
      // 현재 속력에서 퍼트리는 힘을 뺀다.
      steer.limit(this.forceMx);
      // 힘의 크기를 최대 힘으로 제한
    }
    return steer;
    //계산한 퍼트리는 힘을 반환
  }
  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    // 주어진 힘을 객체의 질량으로 나누어 가속도를 계산
    this.acc.add(forceDivedByMass);
    // 계산된 가속도를 현재 가속도에 더함
  }

  update() {
    //
    this.vel.add(this.acc);
    // 속력 + 가속도
    this.vel.limit(this.speedMx);
    // 최대 속도를 제한
    this.pos.add(this.vel);
    // 위치 + 속력
    this.acc.mult(0);
    // 가속도 초기화
  }

  borderInfinite() {
    // 객체가 화면의 경계를 넘었을 떄 다시 나타날 수 있도록함
    if (this.pos.x < -infiniteOffset) {
      // pos.x가 infiniteOffset * -1보다 작다면
      // 객체가 화면 왼쪽을 넘었을 때
      this.pos.x = width + infiniteOffset;
      // pos.x는 너비값에 infiniteOffset를 더함
      // 객체를 화면 오른쪽에 나타나게 함
    } else if (this.pos.x > width + infiniteOffset) {
      // pos.x가 너비값과 infiniteOffset을 더한 것보다 작다면
      // 객체가 화면 오른쪽을 넘었을 때
      this.pos.x = -infiniteOffset;
      // pos.x는 infiniteOffset에 -1을 곱함
      // 객체를 화면 왼쪽에 나타나게 함
    }
    if (this.pos.y < -infiniteOffset) {
      // pos.y가 infiniteOffset * -1보다 작다면
      // 객체가 화면 위쪽를 넘었을 때
      this.pos.y = height + infiniteOffset;
      // pos.y는 높이값에 infiniteOffset를 더함
      // 객체를 화면 아래쪽에 나타나게 함
    } else if (this.pos.y > height + infiniteOffset) {
      // pos.y가 높이값과 infiniteOffset를 더한 것보다 작다면
      // 객체가 화면 아래쪽를 넘었을 때
      this.pos.y = -infiniteOffset;
      // pos.y는 infiniteOffset에 -1을 곱함
      // 객체를 화면 위쪽에 나타나게 함
    }
  }

  display() {
    // 객체를 화면에 표시
    push();
    // 나타냄
    translate(this.pos.x, this.pos.y);
    // 객체의 위치로 이동
    rotate(this.vel.heading());
    // 객체의 속도 방향으로 회전
    noStroke();
    fill(this.color);
    beginShape();
    // 도형 그리기
    vertex(this.rad, 0);
    // 도형의 꼭짓점을 추가 (우측 끝)
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    // 도형의 꼭짓점을 추가 (좌측 아래)
    vertex(0, 0);
    // 도형의 꼭짓점을 추가 (중심)
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    // 도형의 꼭짓점을 추가 (우측 위)
    endShape(CLOSE);
    // 도형 그리기 종료

    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop();
    // 객체 상태 복원
  }
}
