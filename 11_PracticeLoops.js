// Write a program to print the marks of a student in an object using for loop

let marks = {
  adarsh : 60,
  aditi : 70,
  vijay : 80,
  hardik : 90,
  chaman: 100
}

// phele wale javascript mein aisa karna padta tha

console.log("Using Old javascript For Loop \n");
for(let i=0;i<Object.keys(marks).length;i++){
  console.log("The Marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}


console.log("\nUsing new javascript For in Loop \n");
for(let key in marks){
  console.log("The Marks of "+key+" are "+marks[key])
}

console.log("\n");
let name = prompt("Enter Your User Name: "); 
let Encryptedpassword = "Adarsh"; //assume
let password = prompt("Enter Your password: "); 

while(password != Encryptedpassword){
  password = prompt("plz Enter correct password : ")
}
console.log("You have entered correct password you can login now !!!");
