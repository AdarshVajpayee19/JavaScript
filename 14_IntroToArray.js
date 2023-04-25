/*
let marks = [91, 78, 85, 98]

console.log(marks)
console.log(marks.length)
console.log(typeof marks)
marks[4] = 10
console.log(marks)


for (let i=0; i< marks.length;i++){
  console.log(marks[i])
}

*/
//Array Methods
let num = [1,2,3,5,46]
let b = num.toString() // b is now a string
console.log(b,typeof b)

let c = num.join(" and ")
console.log(c,typeof c)

let p = num.pop()  // Pop returns the popped element
console.log(num,p)

let pu = num.push(100)  // push returns the new array length
console.log(num,pu)

let r = num.shift()
console.log(num,r)

let ru = num.unshift(200)
console.log(num,ru)

/*
1,2,3,5,46 string
1 and 2 and 3 and 5 and 46 string
[ 1, 2, 3, 5 ] 46
[ 1, 2, 3, 5, 100 ] 5
[ 2, 3, 5, 100 ] 1
[ 200, 2, 3, 5, 100 ] 5
*/
let number = [1,2,4,5,6]

console.log(number.length)
delete number[0]   
console.log(number.length)

let number1 = [1,2,4,5,6]
let number2 = [9,10,9,7,3]

let newArray = number1.concat(number2)
console.log(newArray.length)

console.log(newArray)
console.log(number1,number2)

let number3 = [100,200,300,400,500]
let newBigArray = number1.concat(number2,number3)
console.log(newBigArray)

// Doesnot change existing array


// Sort method
let srt = [23,14,10,50,67]
console.log(srt.sort()) // it will modified an existing array 

let compare=(a,b)=>{
  return a-b
}

console.log(srt.sort(compare)) // Ascending

let compare1=(a,b)=>{
  return b-a
}

console.log(srt.sort(compare1)) // Descending

// reverse 
console.log(srt.reverse())

// splice and  slice // modifies array
let n = [551,22,3,14,5,6,7,4,9,298]
n.splice(2,3,1021,1022,1023,1024) // 2 -> start index then delete 3 elements afterwards replace with 1021,1022,1023,1024
console.log(n)

let n1 = [551,22,3,14,5,6,7,4,9,298]
let deltedValues = n1.splice(2,3,1021,1022,1023,1024)
console.log(deltedValues)
console.log(typeof deltedValues) // object

//slice : slices out a piece of an array
// doesnot modify an existing array.

const numz=[21,23,4,56,7]
console.log(numz.slice(2)) // [4,56,7]
console.log(numz.slice(1,3)) // [23,4]

console.log(numz)
