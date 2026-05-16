function update() {

  // Movement
  if (keys['ArrowRight']) player.x += player.speed;
  if (keys['ArrowLeft'] ) player.x -= player.speed;
  if (keys['ArrowUp']   ) player.y -= player.speed;
  if (keys['ArrowDown'] ) player.y += player.speed;

  // World boundaries
  if (player.x < 0) player.x = 0;
  if (player.x > world.width - player.width)
    player.x = world.width - player.width;

  if (player.y < 0) player.y = 0;
  if (player.y > world.height - player.height)
    player.y = world.height - player.height;

  updateCamera();
}


// camera update
function updateCamera() {
  camera.x = player.x + player.width / 2 - camera.width / 2;
  camera.y = player.y + player.height / 2 - camera.height / 2;

  // Clamp camera
  if (camera.x < 0) camera.x = 0;
  if (camera.y < 0) camera.y = 0;

  if (camera.x > world.width - camera.width)
    camera.x = world.width - camera.width;

  if (camera.y > world.height - camera.height)
    camera.y = world.height - camera.height;
}