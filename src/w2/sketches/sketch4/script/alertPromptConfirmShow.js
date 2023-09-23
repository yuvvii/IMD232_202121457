let userName = prompt('너의 이름은?', '율리');
let isUserNameCorrect = confirm('당신의 이름이 ' + userName + ' 맞습니까?');
if (isUserNameCorrect == true) {
  document.getElementById('html-id').textContent =
    '환영합니다! ' + userName + '님';
}
