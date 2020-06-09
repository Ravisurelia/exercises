const express = require("express");
const app = express();
const hb = require("express-handlebars");
const team = require("./data.json");
console.log("team: ", team);

app.engine("handlebars", hb());
//setting the engine and the handlebar
app.set("view engine", "handlebars");
//setting the tempelating engine

app.use(express.static("./projects"));

app.get("/", (req, res) => {
  res.render("home", {
    layout: "main",
    cohort: "Dill",
    team,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "main",
    emojis: ["<3", "<3", "<3", "<3", "<3"],
  });
});

app.listen(8080, () => {
  console.log("my express server is running");
  //always check that the server is running......
});
