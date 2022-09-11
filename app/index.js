import arts from "../temp.json" assert { type: "json" };
console.log(arts);
// DOM Nodes declaration
const featuredGrid = document.querySelector(".featured__grid");

function createFeaturedItem(art) {
  const a = document.createElement("a");
  a.classList.add("featured__grid-item");
  a.setAttribute("href", "/art-detail");

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

// let arts = {
//   name: "Beautiful Couple",
//   img: "/img/portrait-1.jpg",
//   price: 10000,
//   originalSize: [12, 16],
//   printSizes: [
//     [10, 12],
//     [12, 16],
//     [16, 20],
//     [18, 24],
//     [20, 24],
//     [24, 30],
//     [24, 36],
//   ],
//   isPrint: true,
//   imgVariety: [
//     "/img/portrait-1.jpg",
//     "/img/portrait-1.jpg",
//     "/img/portrait-1.jpg",
//     "/img/portrait-1.jpg",
//   ],
// };

featuredGrid.innerHTML = "";
for (let art of arts.reverse()) {
  featuredGrid.prepend(createFeaturedItem(art));
}
