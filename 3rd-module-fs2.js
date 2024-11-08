import fs from 'fs'
console.log("Starting");

fs.readFile('textcontents/1st-file.txt', 'utf8', (err, result1) => {
    if (err) {
        console.error(err);
        return;
    }
    const result = result1;

    // Reading the second file after the first file is read
    fs.readFile('textcontents/2nd-file.txt', 'utf8', (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        const result2 = result;
        //Writing the file
        fs.writeFile('textcontents/result-async.txt',
            `This is the result: ${result1};  ${result2}`,
            (err, result) => {
                if (err) {
                    console.error(err);
                    return;
                }
                //console.log(result);
            }
        );
    });
    console.log("File overwritten successfully")
});
console.log("End of Programme")
