import arts from "/temp.json" assert { type: "json" };
// const arts = require("./temp.json");
console.log(arts);
// DOM Nodes declaration
const featuredGrid = document.querySelector(".featured__grid");

function createFeaturedItem(art) {
  const a = document.createElement("a");
  a.classList.add("featured__grid-item");
  a.setAttribute("href", `/art-detail?id=${art.id}`);

  const img_div = document.createElement("div");
  img_div.classList.add("grid-item__image");
  const img = document.createElement("img");
  img.setAttribute("src", art.img);
  img_div.appendChild(img);

  const text_div = document.createElement("div");
  text_div.classList.add("grid-item__text-box");
  const img_title = document.createElement("h3");
  img_title.classList.add("grid-item__title");
  img_title.innerText = art.name;
  text_div.appendChild(img_title);

  a.appendChild(img_div);
  a.appendChild(text_div);
  return a;
}

featuredGrid.innerHTML = "";
for (let art of arts.reverse()) {
  featuredGrid.prepend(createFeaturedItem(art));
}
