const greetKar = (name, greeting) => {
  console.log(name + "  " + greeting);
};

greetKar("Karan", "Hello unclu");

const details = {
  name: prompt("Enter Your Name : "),
  age: prompt("Enter Your Age : "),
  exp: prompt("Enter Your Experience : "),
  show: function () {
    let obj = this;
    console.log(this);
    setTimeout(function () {
      if (obj.exp.toLowerCase() == "student") {
        obj.exp = "No experience.";
      }
      console.log(
        `The name is ${obj.name}\nWith Age is ${obj.age} had an experience of : ${obj.exp}`
      );
      document.write(
        `The name is ${obj.name}\nWith Age is ${obj.age} had an experience of : ${obj.exp}`
      );
    }, 2000);
  },
};

details.show();

/*
1. Write a program to print the following after 2 seconds delay.

*/

const a = (txt) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(txt);
    }, 2000);
  });
};

(async () => {
  let x = await a("Hello");
  console.log(x);
  x = await a("World.");
  console.log(x);
})();

/*
2. Write a javascript program to find average of numbers in an array using spread syntax.

*/

function findAverage(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  return average;
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = findAverage(...numbersArray);

console.log(`Average: ${average}`);

/*
3.Write a javascript function which resolves a Promise after n seconds.The function takes n as parameter.
Use an IIFE to execute the functions with different values of n.
*/

const b = (txt,n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(txt);
        },n*1000);
    });
}

(async () => {
    let v = await b("Adarsh bhaiya chalo baar chalthe long drive pe.",1)
    console.log(v)
    let s = await b("Galti Kardi long drive pe jaake.",4)
    console.log(s)
})()


/*
4. Write a Simple Interest Calculator using javascript.
*/

let p = prompt("Enter Priniciple Amount : ")
let r = prompt("Enter Interest Rate : ")
let t = prompt("Enter Time Interval : ")

function simpleInterest(p,r,t)
{
    return (p*r*t)/100;
}

console.log(simpleInterest(p,r,t));

// node .\filename.js
// npm init or npm init -y
// npm i pdf-node from internet
// npm install  --> nodejs search for dependencies in package.json and install all this dependencies.


// npm and yarn are both package managers we can anyone of them.

// yarn add
