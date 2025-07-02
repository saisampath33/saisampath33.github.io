// console.log("Hello from NodeJS app index1.js");

import add from './calc.js';
import subtract from './calc.js';

const result = add(4,5);
console.log(`The result of adding 4 and 5 is: ${result}`);

const result2 = subtract(10, 3);
console.log(`The result of subtracting 3 from 10 is: ${result2}`);
