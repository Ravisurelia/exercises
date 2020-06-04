const chalk = require("chalk");
const http = require("http");
const querystring = require("querystring");

const server = http.createServer((request, response) => {
  request.on("error", function (err) {
    console.log("request error: ", err);
  });
  response.on("error", (err) => {
    console.log("response error: ", err);
  });

  if (request.method === "GET") {
    response.write(`
      <!doctype html>
        <html>
        <title>Colors</title>
        <form method="POST">
        <input type="text" name="first" placeholder="first" autocomplete="off">
        <select name="color">
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="gray">gray</option>
            <option value="magenta">magenta</option>
            <option value="cyan">cyan</option>
        </select>
        <button type="submit">Go</button>
        </form>
        </html>
      `);
    response.end();
  }
  if (request.method === "POST") {
    let data = "";

    request.on("data", (chunk) => {
      //console.log("my chunk: ", chunk);
      data += chunk;
    });

    request.on("end", () => {
      //console.log("data: ", data);
      response.end("POST successful!!!");
      console.log(queryString.parse(body));
      response.setHeader("Content-Type", "text/html");
      response.statusCode = 200;

      var form = querystring.parse(body);
      res.write(` 
      <!doctype html>
      <html>
          <title>${form.text}</title>
          <a href="/" style="color:${form.color}">${form.text}</a>
      </html>`);
      console.log(chalk[form.color](form.text));
      res.end();
    });
  }
});
server.listen(8080, () => console.log("server is listening!!!"));
//console.log(chalk.redBright("This is my chalk check!!!"));
