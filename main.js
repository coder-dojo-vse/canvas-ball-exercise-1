const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

var width = canvas.width
var height = canvas.height
let ballColor = '#000'
let ballRadius = 10

function drawBall() {
  init()

  context.beginPath();
  context.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  context.fillStyle = ballColor;
  context.fill();
  context.closePath();
}

function init() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height)
}
