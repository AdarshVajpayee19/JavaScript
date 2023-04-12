let name = "Adarsh"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,6))
console.log(name.slice(2))
console.log(name.replace("Ada","ha"))

let friend = "Naman"
console.log(name.concat(" is a friend of ",friend," ok."))
let friend2 = "       Manan       "
console.log(friend2.trim())

// Practice set
let str = "Har\"ry"
console.log(str.length)

const sentence = 'The quick brown fox jumps over the lazy dog.'
const word = 'fox2'
console.log(sentence.includes(word))
console.log(`The word "${word}"${sentence.includes(word) ? 'is':'is not'} in the sentence`);


let str2 = 'Please give mine Rs 300'
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)

let friend1 = "Alia"
friend1[2] = "y"
console.log(friend1)

