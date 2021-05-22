let answer = document.querySelector('input[type="text"]');
const allBtn = document.querySelectorAll('input');
const numBtn = document.querySelectorAll('.btnNum');
let delBtn = document.querySelector('.btnDel');
let ACBtn = document.querySelector('.btnAC');
let equalBtn = document.querySelector('.btnEqual');
const audio = document.querySelector('.click');

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

function AC() {
  answer.value = '';
}

function del() {
  answer.value = answer.value.substr(0, answer.value.length - 1);
}

function show() {
  answer.value += this.value;
}

function equal() {
  if(answer.value) {
    answer.value = eval(answer.value);
  }
}

function numpad(e) {
  // if(e.keyCode === 13) {equal()}
  // answer.value += e.key
}

// Event 
window.addEventListener('keydown', numpad)
ACBtn.addEventListener('click', AC);
delBtn.addEventListener('click', del);
allBtn.forEach(btn => btn.addEventListener('click', playAudio))
numBtn.forEach(btn => btn.addEventListener('click', show));
equalBtn.addEventListener('click', equal);

