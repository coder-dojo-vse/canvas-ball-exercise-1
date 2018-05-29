function draw() {
  drawBall()
}

// promenna width obsahuje sirku platna
// promenna height obsahuje vysku platna

ballRadius = 10
ballColor = "#000000"

let ballX = 0 + ballRadius
let ballY = 0 + ballRadius

setInterval(draw, 10)
