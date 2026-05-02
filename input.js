const keys = {};

window.addEventListener('keydown', (e) => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
    e.preventDefault(); // <-- this is the missing piece
  }
  keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});