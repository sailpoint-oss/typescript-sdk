const fs = require('fs');
const path = require('path');

const updateYamlFiles = (directoryPath) => {
    // Read all files and directories within the given directory
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            fs.stat(filePath, (err, stat) => {
                if (err) {
                    console.error('Error stating file:', err);
                    return;
                }

                if (stat.isDirectory()) {
                    // Recursively process subdirectories
                    updateYamlFiles(filePath);
                } else if (path.extname(file) === '.yaml' || path.extname(file) === '.yml') {
                    // Process YAML file
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error('Error reading file:', err);
                            return;
                        }

                        // Regular expression to find the exact block
                        const regex = new RegExp(`\\s*- name: X-SailPoint-Experimental\\s*\\n\\s*in: header\\s*\\n\\s*description: Use this header to enable this experimental API\\.\\s*\\n\\s*example: true\\s*\\n\\s*schema:\\s*\\n\\s*type: string\\s*\\n\\s*default: true\\s*\\n\\s*required: true`, 'g');

                        // Replace 'required: true' with 'required: false'
                        const updatedData = data.replace(regex, `\n  - name: X-SailPoint-Experimental
    in: header
    description: Use this header to enable this experimental API.
    example: true
    schema:
      type: string
      default: true
    required: false`);

                        // Write the updated YAML back to the file only if changes were made
                        if (updatedData !== data) {
                            fs.writeFile(filePath, updatedData, 'utf8', (err) => {
                                if (err) {
                                    console.error('Error writing file:', err);
                                } else {
                                    console.log(`Updated file: ${filePath}`);
                                }
                            });
                        }
                    });
                }
            });
        });
    });
};

updateYamlFiles(process.argv[2]);
