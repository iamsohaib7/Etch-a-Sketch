const container = document.querySelector(".container");
const canvas = document.createElement("div");
const canvasController = document.createElement("div");
canvas.className = "canvas";
canvasController.className = "controller";
container.appendChild(canvas);

const screen = document.createElement("div");
canvas.appendChild(screen);
screen.id = "screen";

const screenHeight = screen.offsetHeight;

const tiles = 16;
const tileHeight = screenHeight / tiles;
for (let i = 0; i < tiles; i++) {
  const row = document.createElement("div");
  for (let j = 0; j < tiles; j++) {
    const tile = document.createElement("div");
    tile.style.height = `${tileHeight}px`;
    tile.className = "tile";
    row.appendChild(tile);
  }
  row.className = "row";
  screen.appendChild(row);
}
