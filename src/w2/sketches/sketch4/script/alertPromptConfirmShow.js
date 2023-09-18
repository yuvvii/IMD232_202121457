alert('안뇽하세요?');
let userName = prompt('너의 이름은?', '율리');
confirm('당신은 ' + userName + '입니까?');
let domElem = document.getElementById('hereGoesName');
domElem.textContent = '환영해요 ' + userName + '님!';
