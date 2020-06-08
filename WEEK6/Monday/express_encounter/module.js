const fs = require("fs");
function myHtml() {
  const array = fs.readdirSync(__dirname + "/projects");
  const addingHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Portfolio</title>
    </head>
    <body>
    <h1>Prtfolio</h1>
        <ul>
        ${array.map(
          (projects) => `<li><a href="/${projects}">${projects}</a></li>`
        )}
        </ul>
    </body>
    </html>`;

  return addingHtml;
}
module.exports.myHtml = myHtml;
