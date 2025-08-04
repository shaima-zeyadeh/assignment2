const rectangle = document.getElementById("rectangle");
const button = document.getElementById("moveRectangle");

const positions = [
  { bottom: "20px", left: "20px", top: "", right: "" },     // bottom-left
  { bottom: "20px", right: "20px", top: "", left: "" },     // bottom-right
  { top: "20px", right: "20px", bottom: "", left: "" },     // top-right
  { top: "20px", left: "20px", bottom: "", right: "" },     // top-left
];

const colors = ["red", "green", "blue", "black"];
let currentPosition = 0;

// Set initial position
function applyPosition(index) {
  const pos = positions[index];

  rectangle.style.top = "";
  rectangle.style.bottom = "";
  rectangle.style.left = "";
  rectangle.style.right = "";

  rectangle.style.top = pos.top;
  rectangle.style.bottom = pos.bottom;
  rectangle.style.left = pos.left;
  rectangle.style.right = pos.right;

  rectangle.style.backgroundColor = colors[index];
}

// Apply initial position on load
applyPosition(currentPosition);

button.addEventListener("click", () => {
  currentPosition = (currentPosition + 1) % positions.length;
  applyPosition(currentPosition);
});
