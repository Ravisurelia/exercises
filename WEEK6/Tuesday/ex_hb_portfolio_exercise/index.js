const express = require("express");
const app = express();
const hb = require("express-handlebars");
const projects = require("./project.json");
console.log("project: ", projects);

app.engine("handlebars", hb());
//setting the engine and the handlebar
app.set("view engine", "handlebars");
//setting the tempelating engine

app.use(express.static("./projects")); //for the project files
app.use(express.static("./public")); //for the css file access

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  console.log("--------------");
  console.log(`ran ${req.method}`);
  console.log(`ran ${req.url}`);
  console.log(`at: ${Date.now()}`);
  console.log("--------------");
  next();
});

app.get("/", (req, res) => {
  res.render("welcome", {
    layout: "main",
    projects,
  });
});

app.listen(8080, () => {
  console.log("my express server is running");
  //always check that the server is running......
});
