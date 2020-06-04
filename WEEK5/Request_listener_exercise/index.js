const http = require("http");
const fs = require("fs");

const srever = http.createServer(function (request, response) {
  // function is an argument in this case!!
  //all the server code is to be written here!!

  /////erroe handling on the request and response / just copy paste it whenever you write the server req
  request.on("error", function (err) {
    console.log("request error: ", err);
  });
  response.on("error", (err) => {
    console.log("request error: ", err);
  }); //function with arrows!!

  console.log("request.url : ", request.url); //to het the url
  console.log("request.method : ", request.method); //to get the method
  console.log("request.headers : ", request.headers); //to get the headers

  ///---------------SENDING REQUEST----------------------------------
  if (request.method === "GET" && request.url === "/request.txt") {
    //this is how we can response custome headers
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.end(`
        <html>
            <title style="color:red;">Hello World!</title>
            <h1>Hello World!</h1>
        </html>
    `);

    let data = {
      date: Date.now,
      method: request.method,
      url: request.url,
      "user-agent": request.headers["user-agent"],
    };

    fs.appendFile("request.txt", JSON.stringify(data, "\t"), (err) => {
      if (err) {
        console.log("fs err: ", err);
      }
    });
  } else if (request.method === "HEAD") {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.end();
  } else if (request.method === "POST") {
    response.setHeader("Location", "/");
    response.statusCode = 302;
    let data = "";

    request.on("data", (chunk) => {
      console.log("my chunk: ", chunk);
      data += chunk;
    });

    request.on("end", () => {
      console.log("data: ", data);
      response.end("POST successful!!!");
    });
  } else {
    response.statusCode = 405;
    response.end();
  }
}); //this function runs when the server recieves the request from the browser!!

srever.listen(8080, () => console.log("server is listening!!"));

//////yet not finished
