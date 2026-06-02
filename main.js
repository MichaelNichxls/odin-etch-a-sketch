const CELL_SIZE = 20;

const size = document.querySelector("#size");
const reset = document.querySelector("#reset");
const grid = document.querySelector("#grid");

function setGridSize(size) {
  grid.replaceChildren();
  grid.style.width = `${size * CELL_SIZE}px`;
  grid.style.height = `${size * CELL_SIZE}px`;

  for (let i = 0; i < size ** 2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
  }
}

size.addEventListener("click", (e) => {
  const size = +prompt("Size:");
  setGridSize(Math.min(isNaN(size) || size == 0 ? 16 : size, 100));
});

reset.addEventListener("click", (e) => {
  grid.childNodes.forEach((cell) => {
    cell.style.setProperty("--opacity", 0)
  });
});

grid.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("cell")) {
    const opacity = +window.getComputedStyle(e.target).getPropertyValue("--opacity")
    e.target.style.setProperty("--opacity", Math.min(opacity + 0.1, 1))
  }
});

setGridSize(16);
