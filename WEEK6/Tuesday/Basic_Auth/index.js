const express = require("express");
const app = express();
//app is now an instance of express which holds the very large object with bunch of diff properties
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");

app.use(cookieParser());

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
  if (req.url === "/cookie") {
    next();
  } else {
    if (req.cookies.hasAccess) {
      console.log("go ahead!!!!!!1");
      next();
    } else {
      res.redirect("/cookie");
      res.cookie("attemptedUrl", req.url);
    }
  }
});

app.use(express.static(__dirname + "/public")); //this sreves all static files at a given path

/* app.use((req, res, next) => {
  console.log("--------------");
  console.log(`ran ${req.method}`);
  console.log(`ran ${req.url}`);
  console.log(`at: ${Date.now()}`);
  console.log("--------------");
  if (req.url === "/Thursday") {
    const auth = function (req, res, next) {
      const creds = basicAuth(req);
      if (!creds || creds.name != "discoduck" || creds.pass != "opensesame") {
        res.setHeader(
          "WWW-Authenticate",
          'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
      } else {
        next();
      }
    };
    app.use(auth);
  }
}); */

app.get("/cookie", (req, res) => {
  console.log("cookie!!!!!!!!");
  res.send(`<h1> This site uses the cookie. </h1>
    <h3> In order to surf on this site, you need to accept the cookie for optimal performance! Thank you!!!! </h3>
                <form method="POST">
                  <input type="checkbox" name="checkbox" value="true">
                  <button> Submit </button>
                </form>`);
});

app.post("/cookie", (req, res) => {
  //console.log("req.body: ", req.body);
  if (req.body.checkbox === "true") {
    res.cookie("hasAccess", true);
    res.redirect(req.cookies.attemptedUrl);
  } else {
    res.send(
      `<h2> Dear customer, Please accept the cookie to surf on the site!! </h2>`
    );
  }
});

app.listen(8080, () => {
  console.log("express server is running"); //always check that the server is running......
});

///facing problems while loading!!!
