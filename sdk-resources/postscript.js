const fs = require("fs");
const path = require("path");
const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });
  return arrayOfFiles;
};


// When an OpenAPI schema name already contains a version suffix (e.g. AccessRequestConfigV2),
// the generator lowercases it to "accessrequestconfigv2" and then appends the
// --model-name-suffix "V1", producing "Accessrequestconfigv2V1".
// This function corrects those names back to "AccessrequestconfigV2":
//   Pattern: word ending in  v<digits>V1  →  replace with  V<digits>
const fixVersionedModelNames = function (content) {
  return content.replace(/([A-Z]\w*)v(\d+)V1\b/g, "$1V$2");
};

const fixFiles = function (myArray) {
  for (const file of myArray) {
    if (!file.endsWith(".ts")) continue;
    const original = fs.readFileSync(file, "utf8");
    const fixed = fixVersionedModelNames(original);
    if (fixed !== original) {
      fs.writeFileSync(file, fixed, "utf8");
    }
  }
}





let myArray = [];
getAllFiles(process.argv[2], myArray);

fixFiles(myArray)