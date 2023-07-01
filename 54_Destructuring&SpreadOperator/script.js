let arr = [5,3,10,100,10000,1121,12345]
// no need to do this
// let a= arr[0]
// let b= arr[1]

// let [a,b,c,...rest] = arr

// console.log(a,b,c,rest)  


// let [a, , ,...rest] = arr
// console.log(a,rest)  

// let [a, ,b,...rest] = arr
// console.log(a,b,rest)  

// let {a,b} = {a:1,b:5}
// console.log(a,b)

let arr1 = [3,4,56]

let obj1 = {...arr1}

console.log(obj1)


function sum(v1,v2,v3)
{
  return v1+v2+v3
}

console.log(`${sum(...arr1)}`)

let obj2={
  name:"Adarsh",
  Address:"Bangalore",
  age:20
}

console.log({...obj2,name:"Aditya",Address:"Raichur"}) // Overrides Adarsh -->Aditya example.
console.log({name:"Aditya",Address:"Raichur",...obj2}) // Doesnt override

// Local and Global Scope in Javascript.

// let has block level scope 
// Var has global scope

// Javascript has three types of scope :
// 1. Global Scope.
// 2. Function Scope.
// 3. Block Scope.

let p = 9;
function ax()
{
  let a = 10;
  console.log(a)
  console.log(p)
}
console.log(p)
ax()
// console.log(a) // error
