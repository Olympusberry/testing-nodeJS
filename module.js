import { numFactorial } from './my-first-code.js';
import { spray } from './airfreshener.js';

import fs from 'fs';

//os section
import os, { freemem, totalmem } from 'os';


//console.log(os.userInfo());


const uptimeInSeconds = os.uptime();
const days = Math.floor(uptimeInSeconds / (3600 * 24));
const hours = Math.floor((uptimeInSeconds / 3600) % 24);
const minutes = Math.floor((uptimeInSeconds / 60) % 60);

//console.log(`The system uptime is ${days} days, ${hours} hours, ${minutes} minutes`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + " of RAM", // Convert to GB
    freemem: (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + " of RAM" // Convert to GB
};

//console.log(currentOS);



//Path Section
import path from 'path';
const filePath = path.join('learningNode', 'module.js'); //constructs the relative file path from the parameters passed in
const absolutePath = path.resolve(filePath); // Returns the absolute path of the file based on the current working directory
const fileName = path.basename(filePath); //Gives the filename using the file path as an arguement
const dirname = path.dirname(absolutePath); // Returns the file directory without the filename
const extName = path.extname(filePath); //Gives the file extension name
const parsedPath = path.parse(filePath);// Returns an object containing properties of the file path
// Converts the parsed path object back into a string representation
const formattedPath = path.format(parsedPath); //The opposite of parsedPath - Gives the formatted path of the file


//console.log(`This file relative path is ${filePath}`);
//console.log(`This file absolute path is ${absolutePath}`);
//console.log(`This file name is ${fileName}`);
//console.log(`This file directory is ${dirname}`);
//console.log(`The extension of this file is ${extName}`); 
//console.log(`The properties of this file is: ${JSON.stringify(parsedPath, null, 2)}`); //The null, 2 arguments are optional but add indentation, making it easier to read.
//console.log(formattedPath);