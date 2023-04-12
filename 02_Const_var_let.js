console.log("Difference Between var,const and let.")

var a = 10
var b = "Gnanesh"
var c = null
var d = undefined
{
  var b = "Adarsh"
  console.log(b)
}
console.log(b)


let e = "Manoj"
{
  let e = "Adarsh"
  console.log(e)
}
console.log(e)

// Var can be updated,var will create bugs
// So using let is better option.[Thumb rule] and scope based.

// let cannot be redeclared
// ex: let a = 10
//     let a = "Adarsh" //error

// var can be redeclared.
// ex: var a = 10
//     var a = "Adarsh"


const author = "Adarsh"
// let author = "Gnanesh" //error

console.log(author)
