// Art details page

const originalImg = document.querySelector("#original");
const canvasPrint = document.querySelector("#print");
let summarySize = document.querySelector(".summary span label");
const printSizeGrid = document.querySelector(".grid.print");
const originalSizeGrid = document.querySelector(".grid.original");
const artSizeInput = document.querySelector("[name=art-size]");
const addToCart = document.querySelector(".cart button");
// sizeGrid.innerText = "";

let originalActive = true;
let printActive = false;

originalSizeGrid.style.display = "flex";
printSizeGrid.style.display = "none";
artSizeInput.value = originalSizeGrid.children[0].innerText;

addToCart.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(artSizeInput.value);
});

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
  if (originalActive == true) {
    originalImg.classList.add("active");
    canvasPrint.classList.remove("active");
    originalSizeGrid.style.display = "flex";
    printSizeGrid.style.display = "none";
    artSizeInput.value = originalSizeGrid.children[0].innerText;
  }

  if (printActive == true) {
    originalImg.classList.remove("active");
    canvasPrint.classList.add("active");
    originalSizeGrid.style.display = "none";
    printSizeGrid.style.display = "flex";
    for (let child of printSizeGrid.children) {
      child.addEventListener("click", printSizeClicked);
    }

    printSizeGrid.children[0].classList.add("active");
    artSizeInput.value = printSizeGrid.children[0].innerText;
  }
}

function printSizeClicked() {
  let parent = this.parentNode;

  for (let child of parent.children) {
    child.classList.remove("active");
  }
  this.classList.add("active");
  let finalOutputSize = this.children[0].innerText;
  artSizeInput.value = finalOutputSize;
  summarySize.textContent = finalOutputSize;
}

originalImg.addEventListener("click", onImageTypeClick);
canvasPrint.addEventListener("click", onImageTypeClick);
