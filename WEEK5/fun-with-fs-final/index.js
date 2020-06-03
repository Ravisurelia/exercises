const fs = require("fs");
const path = __dirname;
console.log("myPath:", path);
function logSizes(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log("my err in readdir: ", err);
    }
    //console.log("my files: ", files);

    for (let i = 0; i < files.length; i++) {
      if (files[i].isFile()) {
        ///file check
        fs.stat(`${path}/${files[i].name}`, (err, stat) => {
          if (err) {
            console.log("my stat err: ", err);
          }
          console.log(
            //// for the output
            "file path and name and the size: ",
            `${path}/${files[i].name}: ${stat.size}`
          );
        });
      } else if (files[i].isDirectory()) {
        ////directory check
        fs.stat(`${path}/${files[i].name}`, (err, stat) => {
          if (err) {
            console.log("err in stat: ", err);
          }
          console.log("stats for files: ", stat);
          logSizes(`${path}/${files[i].name}`);
        });
      }
    }
  });
}
logSizes(path);

function mapSizes(path) {
  let files = fs.readdirSync(path, { withFileTypes: true });
  let obj = {};
  for (let i = 0; i < files.length; i++) {
    if (files[i].isFile()) {
      fs.stat(`${path}/${files[i].name}`, (err, stat) => {
        if (err) {
          console.log("my stat err: ", err);
        }
        console.log("stat: ", stat);
        obj[files[i].name] = stat.size; //getting error here
      });
    } else {
      obj[files[i].name] = mapSizes(`${path}/${files[i].name}`);
    }
  }
  return obj;
}
mapSizes(path);
fs.writeFileSync(
  `${__dirname}/files.json`,
  JSON.stringify(mapSizes(path), null, 4)
);
console.log("files.JSON created!!!");

///////////////getting error in mapSizes
