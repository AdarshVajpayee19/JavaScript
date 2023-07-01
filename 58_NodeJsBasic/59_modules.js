// const hello = require("./59_modules1")
// hello.hello()
// hello.Ahello("Ashish Bhaiya")
// hello.Ahello("Rakesh Bhaiya")
// hello.Ahello("Roshan Bhaiya")
// hello.Ahello("Yogesh Bhaiya")
// hello.Ahello("Ronak Bhai")


//                                      OR  use destructuring

// const {hello,Ahello} = require("./59_modules1")
// hello()
// Ahello("Ashish Bhaiya")
// Ahello("Rakesh Bhaiya")
// Ahello("Roshan Bhaiya")
// Ahello("Yogesh Bhaiya")
// Ahello("Ronak Bhai")


//                                      OR While using ES6 module
// shows error so we need to add type:"module" in package.json

import adarshDetails,{hello,Ahello} from "./59_modules2.js"

hello()
Ahello("Ashish Bhaiya")
Ahello("Rakesh Bhaiya")
Ahello("Roshan Bhaiya")
Ahello("Yogesh Bhaiya")
Ahello("Ronak Bhai")
adarshDetails()

