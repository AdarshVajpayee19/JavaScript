// 7 Types of Primitive Data Types.

// Null
// Number
// Symbol
// String
// Boolean
// Bigint
// Undefined
// Remember (NN SS BB U)

// 1 Type :Non - primitive Data type
// object

let a = null;
let b = 245;
let c = true;
let d = "Adarsh"
let s = Symbol("Symbol here")
let u = undefined
let i = BigInt("5324264635")

console.log(a, b, c, d, s, u, i)

console.log(
  "Type = ", typeof a, "value is = ", a, "\n",
  "Type = ", typeof b, "value is = ", b, "\n",
  "Type = ", typeof c, "value is = ", c, "\n",
  "Type = ", typeof d, "value is = ", d, "\n",
  "Type = ", typeof s, "value is = ", d, "\n",
  "Type = ", typeof u, "value is = ", u, "\n",
  "Type = ", typeof i, "value is = ", d, "\n")

const movies = {
  "Vampire Diaries": "8 seasons",
  "Money Heist": "4.5 seasons",
  "SHE": "2 Seasons",
  "Criminal Justice": 2,
  "Game of Thrones": undefined
}

console.log(movies["Vampire Diaries"], "\n")

console.log(movies)
