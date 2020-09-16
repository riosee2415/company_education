// Global Variables
let flag = true;

// variable : 변수

/**
 *  변수란 특정한 데이터를 담을 수 있는 공간을 의미힌다.
 *
 *  스크립트에서 변수의 유형(type)은 크게
 *  1. 문자형
 *  2. 정수형
 *  3. 논리형
 *  4. 객체형
 *
 *  으로 분류할 수 있다.
 */

// id가 "list"인 Elements를 찾아 변수 listParent에 저장한다.
// 이때 listParent에 저장되는 데이터는 HTML 이다.
// 이러한 데이터를 DOM 이라 부른다.
const listParent = document.getElementById("list");

// DOM은 문자도 아니고, 정수도 아니고, 논리형도 아니기 때문에 객체형 이라 한다.
// DOM이 가지고 있는 것들을 직접 출력해본다.
console.dir(listParent);

// 특정한 시간차이를 두고 반복적으로 실행되는 내장함수 : setInterval();

//setInterval 사용법

/**
 *  setInterval(반복 실행할 함수, 밀리초);
 *  ->  첫번째 파라미터는 반복적으로 실행 할 함수를 정의하고,
 *      두번째 파라미터에는 반복할 시간을 밀리초로 입력한다.
 */

// setInterval 첫번째 파라미터에 들어갈 함수를 먼저 선언한다.
function repeatAction() {
  // 전역변수 flag가 false라면 함수를 종료한다.
  if (flag === false) {
    return;
  }

  // li 테그를 생성한다.
  const childTag = document.createElement("li");

  // 생성된 li DOM에 Text를 넣어는다.
  childTag.innerText = "데이터를 생성했습니다.";

  // 문자까지 들어간 li테그를 처음 생선한 listParent의 자식으로 추가한다.
  listParent.appendChild(childTag);

  /**
   *
   *  append -> 기존의 값을 잃어버리지 않고 데이터를 추가할 때 사용.
   *
   *  appendChild -> 기존의 자식테그를 잃어버리지 않고 새로운 자식테그를 추가할 때 사용
   */
}

// 3초에 한번씩 repeatAction이 반복되도록 실행한다.
setInterval(repeatAction, 3000);

// 시작 버튼에 연결 될 함수
function startAction() {
  flag = true;
  console.log("start");
}

// 종료 버튼에 연결 될 함수
function endAction() {
  flag = false;
  console.log("end");
}
