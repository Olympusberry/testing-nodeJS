//my-first-code.js
const numArray = [1, 2, 3, 4, 5];
export const numFactorial = numArray.reduce((acc, element) => {
    return acc * element;
}, 1)

//console.log("Testing my JS code in Node.js");