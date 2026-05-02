function draw() {

  // Background
  ctx.fillStyle = '#f1faee';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawWorld();
  drawPlayer();
}


// draw world
function drawWorld() {
  worldObjects.forEach(obj => {

    const x = obj.x - camera.x;
    const y = obj.y - camera.y;

    if (obj.type === 'castle') {
      ctx.fillStyle = '#6d6875';
      ctx.fillRect(x, y, obj.width, obj.height);
    }

    if (obj.type === 'forest') {
      ctx.fillStyle = '#2a9d8f';
      ctx.fillRect(x, y, obj.width, obj.height);
    }

    if (obj.type === 'cave') {
      ctx.fillStyle = '#264653';
      ctx.fillRect(x, y, obj.width, obj.height);
    }
  });
}


// draw player
function drawPlayer() {

  const screenX = player.x - camera.x;
  const screenY = player.y - camera.y;

  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.beginPath();
  ctx.ellipse(screenX + 25, screenY + 55, 20, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  // Body
  ctx.fillStyle = player.color;
  ctx.fillRect(screenX, screenY, player.width, player.height);

  // Eyes
  ctx.fillStyle = 'white';
  ctx.fillRect(screenX + 10, screenY + 10, 8, 8);
  ctx.fillRect(screenX + 32, screenY + 10, 8, 8);
}