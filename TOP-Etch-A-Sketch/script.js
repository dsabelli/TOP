const grid = document.querySelector(".grid");
const width = 16;
function createGrid() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    grid.appendChild(square);
    square.addEventListener("mouseover", function () {
      let red = Math.floor(Math.random() * 256) + 1;
      let green = Math.floor(Math.random() * 256) + 1;
      let blue = Math.floor(Math.random() * 256) + 1;
      square.style.backgroundColor = `rgb(${red},${green},${blue})`;
    });
  }
}
createGrid();
