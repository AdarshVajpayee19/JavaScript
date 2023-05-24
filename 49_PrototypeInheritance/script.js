let a = {
    name: "Adarsh",
    Usn:"1Bg20",
    language:"JAVA",
    run:()=>{
        alert("Self Run")
    }
}

console.log(a)

let p = {
    run: ()=>{
        alert("Prototype Inheritance")
    }
}


p.__proto__ = {
    name2:"Jackie"
}


a.__proto__ = p
// a object has run method so output is alert with Self Run,else output is Prototype Inheritance.
a.run()
console.log(a.name2)


