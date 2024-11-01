let cor = document.querySelector('input[type="color"]');
let body = document.querySelector('body');

function changeColor() {
  body.style.backgroundColor = cor.value;
}