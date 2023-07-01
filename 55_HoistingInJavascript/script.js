/*
Hositing refers to the process where by the interpreter appears to move  the declarations to the top of the code 
before execution.

Variables can thus be referenced before they are declared in javascript.

*/

greeting()

function greeting()
{
    console.log("Hello GM");
}


/*
Note : JavaScript only hoists declaration, not initializations the variable will be undefined until 
the line where its initialized is reached.
*/

// console.log(a);

// var a =10;

// if we use let and const then it will show cannot access before initialization.
// let a = 10;
// console.log(a);


gr8()

// var gr8 = ()=>{
//     console.log("Great 8");
// }



// const gr8 = ()=>{
//     console.log("Great 8");
// }

// let gr8 = function(){
//     console.log("Great 8");
// }


// when we use var "not a function" it shows.
// when we use const and let "not able to access before initialization" it shows.


// Function expression aur class expression are not hoisted.
