"use strict";
var gameStart = null,
  gameSpeed = null,
  gameArea = null,
  gameAreaContext = null,
  gameAreaWidth = 0,
  gameAreaHeight = 0,
  cellWidth = 0,
  playerScore = 0,
  snake = null,
  snakeFood = null,
  snakeDirection = null,
  speedSize = 0,
  timer = null;

function initialize() {
  gameStart = document.querySelector("#gameStart");
  gameSpeed = document.querySelector("#gameSpeed");
  gameArea = document.querySelector("#gameArea");
  gameAreaContext = gameArea.getContext("2d");
  gameAreaWidth = 400;
  gameAreaHeight = 600;
  cellWidth = 20;
  gameArea.width = gameAreaWidth;
  gameArea.height = gameAreaHeight;

  gameStart.onclick = function () {
    this.disabled = true;
    startGame();
  }
}

function startGame() {
  playerScore = 0;
  snakeDirection = "right";
  speedSize = parseInt(gameSpeed.value);

  if (speedSize > 9) {
    speedSize = 9;
  } else if (speedSize < 0) {
    speedSize = 1;
  }

  snake = [];
  snake.push({ x: 0, y: cellWidth });

  createFood();

  clearInterval(timer);
  timer = setInterval(createGameArea, 500 / speedSize);
}

function createFood() {
  snakeFood = {
    x: Math.round(Math.random() * (gameAreaWidth - cellWidth) / cellWidth),
    y: Math.round(Math.random() * (gameAreaHeight - cellWidth) / cellWidth),
  };
}

function createGameArea() {
  var snakeX = snake[0].x;
  var snakeY = snake[0].y;

  gameAreaContext.fillStyle = "#FFFFFF";
  gameAreaContext.fillRect(0, 0, gameAreaWidth, gameAreaHeight);
  gameAreaContext.strokeStyle = "#000000";
  gameAreaContext.strokeRect(0, 0, gameAreaWidth, gameAreaHeight);

  if (snakeDirection == "right") {
    snakeX++;
  } else if (snakeDirection == "left") {
    snakeX--;
  } else if (snakeDirection == "down") {
    snakeY++;
  } else if (snakeDirection == "up") {
    snakeY--;
  }

  if ((snakeX == -1) || (snakeX == gameAreaWidth / cellWidth) || (snakeY == -1) || (snakeY == gameAreaHeight / cellWidth) || Control(snakeX, snakeY, snake)) {
    writeScore();
    clearInterval(timer);
    gameStart.disabled = false;
    return;
  }
}

function Control(x, y, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].x == x && array[i].y == y) return true;
  }
  return false;
}

window.onload = initialize;
window.onKeyDown = null;
