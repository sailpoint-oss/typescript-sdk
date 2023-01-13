const fs = require("fs");
const path = require("path");
const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname.replaceAll('sdk-resources',''), dirPath, "/", file));
    }
  });
  return arrayOfFiles;
};


const fixFiles = function (myArray) {
}




let myArray = [];
getAllFiles(process.argv[2], myArray);

fixFiles(myArray)