const fs = require("fs");

const myPath = __dirname;
console.log("mypath: ", myPath);
const message = "Damn i am the first file written with JS!!!! Dillians <3";
/////////////////////////////////////
////////WRITING A FILE ASYNCHRONOUSLY////////////////
//////////////////////////////////////////////
/* fs.writeFile(`${myPath}/dill.txt`, message, (err) => {
  if (err) {
    console.log("err in writeFile: ", err);
  }
  console.log("writeFile complete!!");
});
console.log("this file comes after the writeFile function!"); */
//__________________________________________________________________________________________________________;
/////////////////////////////////////
////////WRITING A FILE SYNCHRONOUSLY////////////////
//////////////////////////////////////////////

/* const obj = {
  name: "Dill",
  favoriteFilm: ["avengers", "it", "nun", "red"],
};

fs.writeFileSync(`${__dirname}/my_new_json.json`, JSON.stringify(obj, null, 4));
console.log("I am written with sanchronous!!!"); */
//__________________________________________________________________________________________________________;
/////////////////////////////////////
////////READDIR ASYNCHRONOUSLY////////////////
//////////////////////////////////////////////
/* fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log("err in readdir: ", err);
  }
  console.log("files: ", files);
  for (let i = 0; i < files.length; i++) {
    console.log("files[i].name", files[i].name, `files[${i}].name`);
    console.log("this is a files: ", files[i].isFile()); //prits the boolean to check the object in the array is the file or not.
  }
});
console.log("this readdir file comes after the writeFile function!"); */
//__________________________________________________________________________________________________________;
/////////////////////////////////////
////////READDIR SYNCHRONOUSLY////////////////
//////////////////////////////////////////////
/* const myDir = fs.readdirSync(__dirname, { withFileTypes: true });
console.log("myDir: ", myDir);
console.log("myDir[0].name: ", myDir[2].name);
console.log("is a file: ", myDir[2].isFile());
console.log("is a diretory: ", myDir[2].isDirectory()); */
//__________________________________________________________________________________________________________;
/////////////////////////////////////
////////STAT DETERMINES METANFORMATION ABOUT THE FILE AND THE DIRECTORY ASYNCHRONOUSLY////////////////
//////////////////////////////////////////////

/* fs.stat(`${myPath}/index.js`, (err, stat) => {
  if (err) {
    console, log("err in stat:", err);
  }
  console.log("stat for index.js: ", stat);
}); */

//__________________________________________________________________________________________________________;
/////////////////////////////////////
////////STAT DETERMINES METANFORMATION ABOUT THE FILE AND THE DIRECTORY SYNCHRONOUSLY////////////////
//////////////////////////////////////////////
/* const myStat = fs.statSync(myDir[2].name);
console.log("myStat: ", myStat); */

//__________________________________________________________________________________________________________;
/////////////////////////////////////
////////READFILE ASYNCHRONOUSLY////////////////
//////////////////////////////////////////////
/* fs.readFile(`${myPath}/index.js`, `utf8`, (err, data) => {
  if (err) {
    console, log("err in stat:", err);
  }
  console.log("stat for index.js: ", data);
}); */

//__________________________________________________________________________________________________________;
/////////////////////////////////////
////////READFILE SYNCHRONOUSLY////////////////
//////////////////////////////////////////////
const myFile = fs.readFileSync(`${myPath}/index.js`, `utf8`);
console.log("myfile: ", myFile);
