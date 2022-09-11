// Art details page

const originalImg = document.querySelector("#original");
const canvasPrint = document.querySelector("#print");
let summarySize = document.querySelector(".summary span label");
const sizeGrid = document.querySelector(".image-size .grid");
// sizeGrid.innerText = "";

let originalActive = true;
let printActive = false;

const originalSize = [12, 16];
const printSizes = [
  [10, 12],
  [12, 16],
  [16, 20],
  [18, 24],
  [20, 24],
  [24, 30],
  [24, 36],
];

let finalOutputSize = `${originalSize[0]}x${originalSize[1]}`;

// This creates the buttons for the original and print arts
function createSizeButton(size = originalSize) {
  const button = document.createElement("button");
  button.type = "button";
  const label = document.createElement("label");
  button.appendChild(label);
  label.innerText = `${size[0]}x${size[1]}`;
  return button;
}

let butt = createSizeButton();
butt.classList.add("active");
sizeGrid.append(butt);

// Affect what happens when the type of purchased art is clicked
// It modifies the imageSize grid
function onImageTypeClick() {
  if (this.id == "original") {
    originalActive = true;
    printActive = false;
  } else if (this.id == "print") {
    originalActive = false;
    printActive = true;
  }
  let output = "";
  if (originalActive == true) {
    originalImg.classList.add("active");
    canvasPrint.classList.remove("active");
    sizeGrid.innerText = "";
    let button = createSizeButton();
    button.classList.add("active");
    sizeGrid.appendChild(button);
    finalOutputSize = `${originalSize[0]}x${originalSize[1]}`;
    summarySize.textContent = finalOutputSize;
    // output = button.children[0].innerText
  }

  if (printActive == true) {
    originalImg.classList.remove("active");
    canvasPrint.classList.add("active");
    sizeGrid.innerText = "";
    finalOutputSize = `${printSizes[0][0]}x${printSizes[0][1]}`;
    for (let size of printSizes) {
      let button = createSizeButton(size);
      button.addEventListener("click", printSizeClicked);
      sizeGrid.appendChild(button);
    }
    sizeGrid.children[0].classList.add("active");
  }
}

function printSizeClicked() {
  let parent = this.parentNode;

  for (let child of parent.children) {
    child.classList.remove("active");
  }
  this.classList.add("active");
  finalOutputSize = this.children[0].innerText;
  summarySize.textContent = finalOutputSize;
}

originalImg.addEventListener("click", onImageTypeClick);
canvasPrint.addEventListener("click", onImageTypeClick);
