const http = require("http");

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
  if (request.method === "GET" && request.url === "/about") {
    //this is how we can response custome headers
    response.setHeader("x-powered-by", "spaceX");
    //1st arg is the name of the0 header.
    //2nd arg is the value which is assigned to the header.
    response.setHeader("Content-Type", "text/html");
    //here text/html indicates that the file will be either text file or a html file

    ///---------------STATUS CODE----------------------------------
    response.statusCode = 200;
    //if the status code is to be 200 then we dont even need to write the code as server will automatiucally do that
    /* 
        common status codes
            200-ok
            302-rediredt user to another page
            404-user requested page that does not exist
            500-server messed up and doesnt know how to handle the response
   */

    //"the body of the response" is the response we are sending as a html file
    response.end(`
        <html>
            <title style="color:red">Hello World!</title>
            <h1>Hello World!</h1>
        </html>
    `); //we can write some html/ or leave it empty and which is rendred by the browser
    //response.end sends the response
  }

  if (request.method === "POST") {
    let data = "";

    request.on("data", (chunk) => {
      console.log("my chunk: ", chunk);
      data += chunk;
    });

    request.on("end", () => {
      console.log("data: ", data);
      response.end("POST successful!!!");
    });
  }
}); //this function runs when the server recieves the request from the browser!!

srever.listen(8080, () => console.log("server is listening!!"));
