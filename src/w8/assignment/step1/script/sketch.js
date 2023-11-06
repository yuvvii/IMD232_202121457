let traffic;
//변수 traffic를 선언
let infiniteOffset = 80;
//변수 infiniteOffset를 선언하고 초기값으로 80을 설정

//초기 설정 셋업
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  //'canvas'라는 ID를 가진 요소에 3:2 비율 캔버스를 생성
  colorMode(HSL, 360, 100, 100, 100);
  //컬러 모드를 HSL로 설정, 색상, 채도, 밝기 및 투명도에 대한 범위 설정
  background('pink');
  //캔버스의 배경색을 핑크로

  traffic = new Traffic();
  //Traffic 클래스를 traffic 변수에 적용

  for (let n = 0; n < 10; n++) {
    //for 구문
    //n이 0부터 시작하여 10보다 작을 때까지 1씩 증가시키면서 반복
    traffic.addVehicle(random(width), random(height));
    //Vehicle을 랜덤한 위치에 생성하여 traffic에 더함
  }
}

function draw() {
  //각 프레임마다 생성되는 화면 업데이트
  background('pink');
  //캔버스의 배경색을 핑크로
  traffic.run();
  //traffic에 run 함수 적용하여 업데이트, 화면에 표시
}

function mouseDragged() {
  //마우스를 드래그할 때 생기는 함수 정의
  traffic.addVehicle(mouseX, mouseY);
  //마우스의 위치에 Vehicle 생성
}
