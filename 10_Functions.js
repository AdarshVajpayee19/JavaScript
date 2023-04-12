const about =()=> {
 console.log("*******AVERAGE OF 3 Subjects*******")
}  

function avgOfThreeNum(x,y,z){
  return (x+y+z)/3
}

const sumOfThreeNum=(a,b,c)=>{
  return a+b+c
}

about();
let num1 = prompt("\nEnter first Number: ");
num1 = Number.parseInt(num1);

let num2 = prompt("Enter Second Number: ");
num2 = Number.parseInt(num2);

let num3 = prompt("Enter Third Number: ");
num3 = Number.parseInt(num3);

console.log("\nAverage of 3 numbers ",avgOfThreeNum(num1,num2,num3),"\nSum of 3 numbers ",sumOfThreeNum(num1,num2,num3));

