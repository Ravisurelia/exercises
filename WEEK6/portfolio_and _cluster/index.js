const http = require("http");
const fs = require("fs");
const path = require("path");
const { myHtml } = require("./module.js");
//console.log(addHtml);

const server = http.createServer(function (req, res) {
  //console.log("__dirname: ", __dirname);

  if (req.method !== "GET") {
    res.statusCode = 405; //method not allowed
    return res.end();
  }
  if (req.url === "/") {
    return res.end(myHtml());
  }

  const filePath = __dirname + "/projects" + req.url;
  //console.log("filePath: ", filePath);

  //lets deal with a potential attack

  if (!path.normalize(filePath).startsWith(__dirname + "/projects")) {
    res.statusCode = 403;
    console.log("ACCESS NOT ALLOWED");
    return res.end();
  }

  const obj = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
  };
  console.log(filePath);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.log(("err in fs.stat; ", err));
      res.statusCode = 404;
      return res.end();
    }

    if (stats.isFile()) {
      //console.log("is s file");
      // we need to set the correct content type header
      //res.setHeader("Content-Type", "text/css");
      //we can use the core node module, path to hel us figure out the extension name
      const extension = path.extname(filePath);
      //console.log("extension: ", extension);
      res.setHeader("content-type", obj[extension]);

      const readStreamHtml = fs.createReadStream(filePath);
      readStreamHtml.pipe(res);
    } else {
      //console.log("is a directory");
      if (req.url.endsWith("/")) {
        const readStreamHtml = fs.createReadStream(filePath + "/index.html");
        readStreamHtml.pipe(res);

        readStreamHtml.on("error", (err) => {
          console.log(err);
          res.statusCode = 500;
          return res.end();
        });
      } else {
        req.setheader("Location", req.url + "/");
        res.statusCode = 302;
        res.end();
      }
    }
  });
});
server.listen(8080, () => console.log("portfolio is ready to run"));
