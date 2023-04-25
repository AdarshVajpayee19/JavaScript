//  Map Filter Reduce: Higher Order Arrays


// Map
let arr = [45,463,443,9,4,2]

let a = arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index
}) 
console.log(a)

// Filter
let arr2 = [45,463,443,9,8,6]

let a2 = arr2.filter((a)=>{
    return a<10
}) 
console.log(a2)


// Reduce
let arr3 = [1,2,34,42,44,2,1]

let newArr=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newArr) 
// 1+2=3, 3+34=37, 37+42=79, 79+44=123, 123+2=125, 125+1 = 126
