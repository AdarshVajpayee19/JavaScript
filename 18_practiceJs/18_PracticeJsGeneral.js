// 1.write a program using prompt function to take input of age as a value from the user
// and use alert to tell him if he can drive
// 2.Use Confirm also
// 3.Use Error if age is negative

// prompt alert  will not work in vscode try it on browser.

// let runAgain=true;

// const canDrive=(age)=>{
//     return age>=18?true:false;
// }

// while(runAgain)
// {
//     let age = prompt("Enter your age: ")
//     age = Number.parseInt(age)

//     if(age<0)
//     {
//         console.error("Please enter a valid age");
//         break;
//     }
//     if(canDrive(age))
//     {
//         alert("Yes you can drive.")
//     }
//     else{
//         alert("you cannot drive.")
//     }
//     runAgain = confirm("Do you want to drive again.")
// }

// 4. If number entered is greater than 4 then navigate to google.
// let number = prompt("Enter the number: ")
// number = Number.parseInt(number)

// if(number > 4)
// {
//     location.href = "https://google.com"; 
// }

// 5. Change Background Color of the page according to user input through prompt.

let color = prompt("Enter the background color You want : ")
document.body.style.background = color


