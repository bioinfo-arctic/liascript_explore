

# Full Walking Game

Move using **Arrow Keys** or **WASD**


<div style="text-align: center;">
  <canvas id="gameCanvas"
          style="border:5px solid #333; background:#a8dadc; border-radius:10px; cursor:crosshair; width:100%; height:72vh; display:block;">
  </canvas>
</div>

<script src="canvas.js"></script>

<script>
const canvas = document.getElementById('gameCanvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const ctx = canvas.getContext('2d');

const player = {
  x: canvas.width / 2 - 25,
  y: canvas.height / 2 - 25,
  width: 50,
  height: 50,
  color: '#e63946',
  speed: 5
};

const keys = {};

window.addEventListener('keydown', (e) => {
  keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});

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

<script src="render.js"></script>
<script src="loop.js"></script>
