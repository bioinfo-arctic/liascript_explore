

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


</script>
<script src="engine.js"></script>
<script src="render.js"></script>
<script src="loop.js"></script>
