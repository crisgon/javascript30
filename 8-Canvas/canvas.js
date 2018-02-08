const color = document.querySelector('.color');
const size = document.querySelector('.size');
const clear = document.querySelector('.clear');

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY  = 0;
let hue = 0;
let direction = true;

color.addEventListener('change', () => ctx.strokeStyle = color.value);
size.addEventListener('change', () => ctx.lineWidth = size.value);
clear.addEventListener('click', (e) => {
  e.preventDefault();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
function draw (e) {
  if(!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);