const keys = {};
const prevKeys = {};

canvas.addEventListener('keydown', (e) => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
    e.preventDefault(); // stop scrolling
  }
  keys[e.key] = true;
});

canvas.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});