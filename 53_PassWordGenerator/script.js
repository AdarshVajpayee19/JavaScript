/*

class Password{
  constructor(pass)
  {
    console.log("welcome to Password generator")
    this.pass = "";
  }
  generatePassword(len){
    let chars = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "1234567890"
    let special = "!@#$%^&*()_"

    if(len<3)
    {
      console.log("Your Password should be atleast 3 Characters long.")
    }
    else{
      let i=0;
      while(i<len)
      {
        this.pass += chars[Math.floor(Math.random()*chars.length)]
        this.pass += numbers[Math.floor(Math.random()*numbers.length)]
        this.pass += special[Math.floor(Math.random()*special.length)]
        i+=3;
      }
      this.pass=this.pass.substring(0,len);
      return this.pass;
    }
  }
}

let p = new Password()
console.log(p.generatePassword(17))
console.log("p3$f2%e8$k4#f6#m6".length)
console.log(p.generatePassword(2))

*/

// IIFE --> Immediately invoked function Expression.

let a = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(420)
    },3000)
  })
}

// let fun = async()=>{
//   let b = await a()
//   console.log(b)
//   let c = await a()
//   console.log(c)
//   let d = await a()
//   console.log(d)
// }

// fun()


(async()=>{
  let b = await a()
  console.log(b)
  let c = await a()
  console.log(c)
  let d = await a()
  console.log(d)
})()
