<script>
function update() {
  // Movement
  if (keys['ArrowRight'] || keys['d']) player.x += player.speed;
  if (keys['ArrowLeft']  || keys['a']) player.x -= player.speed;
  if (keys['ArrowUp']    || keys['w']) player.y -= player.speed;
  if (keys['ArrowDown']  || keys['s']) player.y += player.speed;

  // Boundaries
  if (player.x < 0) player.x = 0;
  if (player.x > canvas.width - player.width)
    player.x = canvas.width - player.width;

  if (player.y < 0) player.y = 0;
  if (player.y > canvas.height - player.height)
    player.y = canvas.height - player.height;
}
</script>
