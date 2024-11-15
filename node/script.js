
// for(let i=1;i<11; i++){
//   console.log(i*2);
// }
// console.log("nand");
// console.log(process.argv);
// let args=process.argv;
// for(let i=2;i<args.length;i++){
//   console.log("hello to",args[i]);
// }

// require trying.
// const somevalue = require("./math");
// console.log(somevalue);

// inner directory
// const maths = require("./math");
// console.log(maths);
// console.log(maths.sum(5,6));

// outer directory

// const outer = require("fruits");
// console.log(outer);
// console.log(outer[0]);
// console.log(outer[0].name);

// import 
import { sum, pi, g } from "./math.js";
console.log(sum(1, 2), pi, g);
import { generate } from "random-words";
console.log(generate(5));
console.log(generate());