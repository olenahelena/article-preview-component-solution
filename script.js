const myButton = document.getElementById('share__btn');
const myButtonSecond = document.getElementById('share__btn_second');
const popUp = document.getElementById('social-media');


myButton.onclick = function () {
  popUp.classList.toggle('error');
}

myButtonSecond.onclick = function () {
  popUp.classList.toggle('error');
}