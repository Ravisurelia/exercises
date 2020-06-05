const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {
  //this is how we stream------------
  console.log("__dirname: ", __dirname);
  const readStream = fs.createReadStream(
    __dirname + "/projects/spotify_search_2/style.css"
  );
  readStream.pipe(res);

  if (req.method !== "GET") {
    res.statusCode = 405; //method not allowed
    return res.end();
  }

  const filePath = __dirname + "/projects" + req.url;
  console.log("filePath: ", filePath);

  //lets deal with a potential attack
  /*  console.log("/user/petea/../../../wp-config/passwords.txt");
  console.log(path.normalize("/user/petea/../../../wp-config/passwords.txt")); */

  if (!path.normalize(filePath).startsWith(__dirname + "/projects")) {
    res.statusCode = 403;
    console.log("ACCESS NOT ALLOWED");
    return res.end();
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.log("err in fs.stat; ", err);
      res.statusCode = 404;
      return res.end();
    }
    console.log("lets do something");
    if (stats.isFile()) {
      console.log("is s file");
      // we need to set the correct content type header
      //res.setHeader("Content-Type", "text/css");

      //we can use the core noe module, path to hel us figure out the extension name
      const extension = path.extname(filePath);
      console.log("extension: ", extension);
    } else {
      console.log("is a directory");
      if (req.url.endsWith("/")) {
        const readStreamHtml = fs.createReadStream(filePath + "/index.html");
        readStreamHtml.pipe(res);
        readStreamHtml.on("error", (err) => {
          console.log(err);
          res.statusCode = 500;
          return res.end();
        });
      } else {
        //we need to rediredt to the
      }
    }
  });
});
server.listen(8081, () => console.log("portfolio is ready to run"));
