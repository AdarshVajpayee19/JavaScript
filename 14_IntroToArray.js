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
