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

// Function to create a directory if it doesn't exist
const createDir = (srcDir, dirName) => {
  const newDir = path.join(srcDir, dirName);
  // Create the directory only if it doesn't exist
  if (!fs.existsSync(newDir)) {
    fs.mkdirSync(newDir, { recursive: true });
  }
  return newDir; // Return the path for further use
};
// Function to handle the movement of files/folders
const moveFiles = (srcPath, destPath) => {
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }
  // Move file/folder from srcPath to destPath
  fs.renameSync(srcPath, path.join(destPath, path.basename(srcPath)));
};
// Main logic
const processDirectory = (srcDir) => {
  // Read all files and directories in the source directory
  const files = fs.readdirSync(srcDir);
  // Create necessary directories
  const docsDir = createDir(srcDir, 'Docs');
  const examplesDir = createDir(docsDir, 'Examples');
  const methodsDir = createDir(docsDir, 'Methods');
  const modelsDir = createDir(docsDir, 'Models');
  // Iterate over each file/folder in the source directory
  files.forEach(file => {
    const currentPath = path.join(srcDir, file);
    
    // Ensure destination paths for files
    const destExamplePath = path.join(examplesDir, file);
    const destMethodPath = path.join(methodsDir, file);
    const destModelPath = path.join(modelsDir, file);
    // If it's a directory
    if (fs.statSync(currentPath).isDirectory()) {
      // Move specific directories based on naming conventions
      if (file.includes('developerSite_code_examples')) {
        moveFiles(currentPath, examplesDir); // Move to Examples
      } else if (file.includes('Api.md')) {
        moveFiles(currentPath, methodsDir); // Move to Methods
      } else if (file.includes('.md')) {
        moveFiles(currentPath, modelsDir); // Otherwise, move to Models
      } else {
        //dont move them.
       } // Move to Docs
    } else { // If it's a file
      // Move files based on naming conventions
      if (file.includes('developerSite_code_examples')) {
        fs.renameSync(currentPath, destExamplePath); // Move to Examples
      } else if (file.includes('Api.md')) {
        fs.renameSync(currentPath, destMethodPath); // Move to Methods
      } else if (file.includes('.md')) {
        fs.renameSync(currentPath, destModelPath); // Otherwise, move to Models
      }else {
        fs.renameSync(currentPath, currentPath); // Move to Docs
      }
    }
  });
};


const fixFiles = function (myArray) {
}



// move all files from doc folder into either method, models or examples folder
processDirectory(process.argv[2]);

let myArray = [];
getAllFiles(process.argv[2], myArray);

fixFiles(myArray)