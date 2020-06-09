const express = require("express");
const app = express();
//app is now an instance of express which holds the very large object with bunch of diff properties
const cookieParser = require("cookie-parser");

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

//--------------------------------------------------------------------------------------------------------------;
///////////////////////////////////////////////////////
//////////////CLASS NOTES/////////////////////////////
//////////////////////////////////////////////////////
//our own middleware to log the rq method and req url of incoming req
/* app.use((req, res, next) => {
    console.log("--------------");
    console.log(`ran ${req.method}`);
    console.log(`ran ${req.url}`);
    console.log(`at: ${Date.now()}`);
    console.log("--------------");
    next(); //it make sure that we exit the middleware and move on to the next function
    //we can also actively send the res.end();
    //res.send("<h1> I am the middleware coming to you!!! </h1>");
    //res.redirect("/");
  }); */

//handle GET req with express way....
//app.get expects 2 argmts first the rout "/", and 2nd the callback function for the req and resp.
/*  app.get("/", (req, res) => {
    console.log("--------------");
    console.log("GET is rounted  / with this");
    console.log("--------------");
    console.log("req.cookies: ", req.cookies);
    res.send("<h1> I <3 Express </h1>"); //send the file to the browser and gives the output on the screen
  });
  app.get("/about", (req, res) => {
    console.log("--------------");
    console.log("GET is rounted  / with this");
    console.log("--------------");
    res.cookie("name", "Ravi");
    res.sendFile(`${__dirname}/index.html`); //send the whole file to the browser and gives the output on the screen
  }); */

//dynamic routing
/* app.get("/about/:name", (req, res) => {
    console.log("--------------");
    console.log("GET is rounted /about/:name with this");
    console.log("--------------");
    console.log("req.params :", req.params);
    res.send(
      `<h1> I <3 Express and its dynamic and it is : ${req.params.name}</h1>`
    );
  });
  
  app.get("/cute-animals", (req, res) => {
    console.log("--------------");
    console.log("GET is rounted /cute-animals");
    console.log("--------------");
    res.send(`<form method="POST">
                  <input type="text" name="animal" placeholder="animal" autocomplete="off">
                  <input type="text" placeholder="score" name="score">
                  <button> Submit </button>
              </form>`);
  });
  
  app.post("/cute-animals", (req, res) => {
    console.log("--------------");
    console.log("GET is rounted /cute-animals");
    console.log("--------------");
    console.log("req.body: ", req.body);
    res.send(
      `<h2> The animal you submitted is: ${req.body.animal} with the value: ${req.body.score} </h2>`
    );
  });
  
  app.get("/secret_page", (req, res) => {
    if (req.cookies.hasAccess) {
      res.send("<h1>This is my cookies</h1>");
    } else {
      res.redirect("/");
    }
  }); */
