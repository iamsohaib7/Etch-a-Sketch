const container = document.querySelector(".container");
const canvas = document.createElement("div");
canvas.className = "canvas";
container.appendChild(canvas);

const body = document.querySelector("body");
const canvasController = document.createElement("div");
canvasController.className = "canvas-controller";
body.appendChild(canvasController);

const clearBtn = document.createElement("button");
canvasController.appendChild(clearBtn);
clearBtn.className = "btn";
clearBtn.id = "clear-btn";
clearBtn.textContent = "Clear!";

const randomBtn = document.createElement("button");
canvasController.appendChild(randomBtn);
randomBtn.textContent = "Random Color";
randomBtn.className = "btn";
randomBtn.id = "random-btn";
let isRandomColor = false;

// input slider contols
const sliderText = document.createElement("div");
canvasController.appendChild(sliderText);
const tileSlider = document.createElement("input");
canvasController.appendChild(tileSlider);
tileSlider.type = "range";
tileSlider.min = 5;
tileSlider.max = 70;
tileSlider.defaultValue = 16;
sliderText.textContent = "16 x 16";
sliderText.className = "slide-text";

// screen adjustment
const screen = document.createElement("div");
canvas.appendChild(screen);
screen.id = "screen";

// default tiles filling
fillCanvasScreen(16);

//  Canvas tile Filling
function fillCanvasScreen(tiles) {
  const screenHeight = screen.offsetHeight;
  const tileHeight = screenHeight / tiles;
  for (let i = 0; i < tiles; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < tiles; j++) {
      const tile = document.createElement("div");
      tile.style.height = `${tileHeight}px`;
      tile.className = "tile";
      tile.addEventListener("mouseover", () => {
        const newColor = isRandomColor
          ? (() => {
              const letters = "0123456789ABCDEF";
              let color = "#";
              for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
              }
              return color;
            })()
          : "black";
        tile.style.backgroundColor = newColor;
        colorPreview.style.backgroundColor = newColor;
      });
      row.appendChild(tile);
    }
    row.className = "row";
    screen.appendChild(row);
  }
}

// controller event listeners
// generate random color
randomBtn.addEventListener("click", () => {
  isRandomColor = !isRandomColor;
  if (isRandomColor) {
    randomBtn.style.backgroundColor = "hsl(282, 34%, 89%)";
  } else {
    randomBtn.style.backgroundColor = "#cdb4db";
  }
});

// resizing the tiles size and increasing the quantity
tileSlider.addEventListener("input", (e) => {
  const newTiles = Number(e.target.value);
  sliderText.textContent = `${newTiles} x ${newTiles}`;
  screen.innerHTML = "";
  fillCanvasScreen(newTiles);
});

// clear btn;
clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".tile").forEach((tile) => {
    tile.style.backgroundColor = "white";
  });
  colorPreview.style.backgroundColor = "white";
});
