let num = [3,54,76,8,5,78]

// say now we want to multiply each element by 2

// forEach Loop in javascript
num.forEach((element)=>{
    console.log(element*2)
})

// When do u have HTML Collection you will use Arrays.from
let name = "Adarsh"
let arr = Array.from(name)
console.log(arr)


// ForOf Loop 

for(let i of num)
{
    console.log(i)
}

// For in Loop
let obj = {
    name:"Adarsh",
    usn:"1BG20IS002",
    branch:"Ise"
}

for(let i in obj)
{
    console.log(i,obj[i]) // Key Value
}

