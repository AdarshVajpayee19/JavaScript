/*
let num = prompt("Enter the no of elements: ");
num = Number.parseInt(num);
for (let i = 1; i < num; i++) {
  console.log(i);
}
*/


//program to add n natural numbers.
/*
let sum = 0;
let num = prompt("Enter the no of elements you want the sum of :");
num = Number.parseInt(num);
for (let i = 1; i <= num; i++) {
  sum = sum + i;
}
console.log("Sum of the first", num, "numbers is ", sum);
*/
// program to print factorial of a number.

/*
let num = prompt("Enter the Factorial of a number you want(Postive number) : ");
num = Number.parseInt(num)

if(num == 0|| num==1)
{ 
  console.log("Factorial of a number is : 1");
}
if(num>1)
{ 
    for(let i=num-1;i>=1;i--){
    num *=i;
    }
    console.log("Factorial of a number is : ",num);
}
*/
let obj ={
  adarsh : "1BG20IS002",
  abhay : "1BG20IS001",
  aditi : "1BG20IS003",
  sunil : "1BG20IS013",
  gnanesh : "1BG20IS007",
  manoj : "1BG20IS010",
  gopal : "1BG20IS060",
  shabri : "1BG20IS025"
}

//For in Loop
for(let a in obj){
  console.log("Usn of "+a+" is "+ obj[a])
}

//For Of Loop : Iterable

for (let b of "Adarsh vajpayee"){
  console.log(b)
}

// let is block-level scope.
// where var is present throughout the program

// Using let in for loop
for (let i = 1; i < 10; i++) {
  console.log(i);
}
// console.log(i); //error becoz let is block-level scope.


// Using var in for loop
for (var i = 1; i < 10; i++) {
  console.log(i);
}
console.log(i);

