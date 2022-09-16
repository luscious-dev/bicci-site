// Imports
const express = require("express");
const path = require("path");
const dataz = require("./public/temp.json");
const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { loc: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about/index", { loc: "About" });
});

app.get("/art-detail", (req, res) => {
  let { id } = req.query;
  let data = dataz.find((e) => e.id == id);
  if (data) {
    res.render("art-detail/index", { loc: "Art Detail", data });
  } else {
    res.send("This does not exist!");
  }
  // for (let data of dataz) {
  //   if (data.id == id) {
  //     res.render("art-detail/index", { loc: "Art Detail", data });
  //   }
  // }
  // res.send("This does not exist!");
});

app.get("/cart", (req, res) => {
  res.render("cart/index", { loc: "Cart" });
});

app.get("/gallery-walls", (req, res) => {
  res.render("gallery-walls/index", { loc: "Gallery Wall" });
});

app.get("/sign-in", (req, res) => {
  res.render("sign-in/index", { loc: "Sign In" });
});

app.get("/sign-up", (req, res) => {
  res.render("sign-up/index", { loc: "Sign Up" });
});

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
