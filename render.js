function draw() {
  // Background
  ctx.fillStyle = '#f1faee';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.beginPath();
  ctx.ellipse(player.x + 25, player.y + 55, 20, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  // Player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Eyes
  ctx.fillStyle = 'white';
  ctx.fillRect(player.x + 10, player.y + 10, 8, 8);
  ctx.fillRect(player.x + 32, player.y + 10, 8, 8);
}

