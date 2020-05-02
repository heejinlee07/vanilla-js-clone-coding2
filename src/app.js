const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;
ctx.fillStyle = 'green';
ctx.fillRect(50, 20, 100, 49);
ctx.fillStyle = 'purple';
ctx.fillRect(80, 100, 100, 49);

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    console.log('creating path in', x, y);

    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    console.log('creating line in', x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

// function onMouseDown(event) {
//   painting = true;
// }

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

function handelRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handelModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = 'Fill';
  } else {
    filling = true;
    mode.innerText = 'Paint';
    ctx.fillStyle = ctx.strokeStyle;
  }
}

// 4:14 다시

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick));
console.log(Array.from(colors));

if (range) {
  range.addEventListener('input', handelRangeChange);
}

if (mode) {
  mode.addEventListener('click', handelModeClick);
}
