import fs from 'fs';

// (Synchronous method) Read the existing content of the file
const fileContent = fs.readFileSync('textcontents/text.txt', 'utf8');// Reads the file content. 'utf8' ensures that the file is read or written as text rather than binary

//(Synchronous method) Overwrite the file content 
fs.writeFileSync(
    'textcontents/text.txt', // Path to the file
    ' This is the added text. ', // Text to be added
    { flag: 'a' } // Append mode (instead of overwriting)
);


//(Asynchronous method) Read the existing content of the file
//Formular: fs.readFile('filePath', 'encoding', callback)
fs.readFile('textcontents/text.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});


//(Asynchronous method) Overwrite the file content
//Formular: fs.writeFile('filePath', 'encoding', callback)
const asyncFileContent = fs.writeFile(
    'textcontents/text.txt',
    'This is another added text',
    { flag: 'a' }, // Append mode (instead of overwriting)
    (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Text added successfully");
    }
)


/* const asynMethod = fs.readFile(
    'filePath', 
    'utf8',
    { flag: 'a' },
    (err, result) => {
        if (err) {
            console.err(err)
            return;
        }
        console.log(result);
    }  
) */

