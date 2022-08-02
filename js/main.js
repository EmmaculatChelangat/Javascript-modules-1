// main entry point

// import one statement
// import { double } from "./utils.js";

// importing 2 statements
// import { double, name } from "./utils.js";

// console.log(double(5));


// renaming imports--duplicates
// import { double as utilsDouble, name } from "./utils.js";

// import all statements at once
// import * as Utils from "./utils.js";

// using default

import { default as bottle } from "./utils.js"; //or
// import  bottle  from "./utils.js";

import { water } from "./utils.js"

// console.log(utilsDouble(5));

// console.log(Utils.double(5));


// console.log(Utils.name)

bottle()

water()