const world = {
  width: 5000,
  height: 3000
};

// Forest with pre-generated trees (no flicker)
function createForest(x, y, width, height) {
  return {
    type: 'forest',
    x, y, width, height,
    trees: Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random()
    }))
  };
}

const worldObjects = [
  { type: 'castle', x: 400,  y: 300,  width: 200, height: 200 },
  createForest(1200, 500, 400, 300),
  { type: 'cave',   x: 2200, y: 1200, width: 250, height: 180 }
];