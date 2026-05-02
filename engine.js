function update() {
  // Movement
  if (keys['ArrowRight']) player.x += player.speed;
  if (keys['ArrowLeft'] ) player.x -= player.speed;
  if (keys['ArrowUp']   ) player.y -= player.speed;
  if (keys['ArrowDown'] ) player.y += player.speed;

  // Boundaries
  if (player.x < 0) player.x = 0;
  if (player.x > canvas.width - player.width)
    player.x = canvas.width - player.width;

  if (player.y < 0) player.y = 0;
  if (player.y > canvas.height - player.height)
    player.y = canvas.height - player.height;
}

