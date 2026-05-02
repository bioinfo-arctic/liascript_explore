function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();

// 8. loop
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();