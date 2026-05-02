function draw() {
  ctx.fillStyle = '#f1faee';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawGrid();
  drawWorld();
  drawPlayer();
  drawMinimap();
}


// --- WORLD RENDERING ---
// draw world

function drawWorld() {
  worldObjects.forEach(obj => {

    if (obj.type === 'castle') drawCastle(obj);
    if (obj.type === 'forest') drawForest(obj);
    if (obj.type === 'cave')   drawCave(obj);

  });
}


// --- OBJECT DRAW FUNCTIONS ---

function drawCastle(obj) {
  const x = obj.x - camera.x;
  const y = obj.y - camera.y;
  const w = obj.width;
  const h = obj.height;

  // Main body
  ctx.fillStyle = '#6d6875';
  ctx.fillRect(x, y + h * 0.3, w, h * 0.7);

  // Towers
  ctx.fillStyle = '#4a4e69';
  ctx.fillRect(x - 20, y, 40, h);
  ctx.fillRect(x + w - 20, y, 40, h);

  // Roofs
  ctx.fillStyle = '#22223b';
  ctx.beginPath();
  ctx.moveTo(x - 20, y);
  ctx.lineTo(x, y - 30);
  ctx.lineTo(x + 20, y);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x + w - 20, y);
  ctx.lineTo(x + w, y - 30);
  ctx.lineTo(x + w + 20, y);
  ctx.fill();

  // Gate
  ctx.fillStyle = '#3a3a3a';
  ctx.fillRect(x + w/2 - 20, y + h - 50, 40, 50);
}


function drawForest(obj) {
  obj.trees.forEach(t => {

    const tx = obj.x + t.x * obj.width;
    const ty = obj.y + t.y * obj.height;

    const x = tx - camera.x;
    const y = ty - camera.y;

    // trunk
    ctx.fillStyle = '#6b4f2a';
    ctx.fillRect(x + 6, y + 10, 4, 10);

    // leaves
    ctx.fillStyle = '#2a9d8f';
    ctx.beginPath();
    ctx.arc(x + 8, y + 8, 10, 0, Math.PI * 2);
    ctx.fill();
  });
}


function drawCave(obj) {
  const x = obj.x - camera.x;
  const y = obj.y - camera.y;
  const w = obj.width;
  const h = obj.height;

  ctx.fillStyle = '#264653';

  ctx.beginPath();
  ctx.moveTo(x, y + h);
  ctx.quadraticCurveTo(x + w/2, y - 40, x + w, y + h);
  ctx.closePath();
  ctx.fill();

  // entrance
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.ellipse(x + w/2, y + h - 10, 30, 15, 0, 0, Math.PI * 2);
  ctx.fill();
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

// --- GRID (movement feedback) ---

function drawGrid() {
  const size = 100;

  ctx.strokeStyle = '#d0d7de';

  for (let x = 0; x < world.width; x += size) {
    const sx = x - camera.x;
    ctx.beginPath();
    ctx.moveTo(sx, -camera.y);
    ctx.lineTo(sx, world.height - camera.y);
    ctx.stroke();
  }

  for (let y = 0; y < world.height; y += size) {
    const sy = y - camera.y;
    ctx.beginPath();
    ctx.moveTo(-camera.x, sy);
    ctx.lineTo(world.width - camera.x, sy);
    ctx.stroke();
  }
}


// --- MINIMAP ---

function drawMinimap() {
  const scale = 0.05;

  const w = world.width * scale;
  const h = world.height * scale;

  const x = canvas.width - w - 10;
  const y = 10;

  ctx.fillStyle = 'rgba(0,0,0,0.6)';
  ctx.fillRect(x, y, w, h);

  // objects
  worldObjects.forEach(obj => {
    ctx.fillStyle = '#aaa';
    if (obj.type === 'forest') ctx.fillStyle = '#2a9d8f';
    if (obj.type === 'cave')   ctx.fillStyle = '#264653';

    ctx.fillRect(x + obj.x*scale, y + obj.y*scale, obj.width*scale, obj.height*scale);
  });

  // player
  ctx.fillStyle = 'red';
  ctx.fillRect(x + player.x*scale, y + player.y*scale, 5, 5);

  // camera
  ctx.strokeStyle = 'white';
  ctx.strokeRect(
    x + camera.x*scale,
    y + camera.y*scale,
    camera.width*scale,
    camera.height*scale
  );
}