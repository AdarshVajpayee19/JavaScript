/*
try{
    console.log(adarsh)
    throw new ReferenceError("Adarsh is nayi defined.")
}
catch(error)
{
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

*/
/*
try{
    let age=prompt("Enter Your Age: ")
    age = Number.parseInt(age)
    if(age < 18)
    {
        throw new ReferenceError("You are not eligible to vote.")
    }
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
console.log("The Script is still running.")
*/
//  mdn errors in javascript. search

// use of finally

const fErr = () => {
  try {
    console.log("Program Ran Successfully....")
    document.body.innerHTML = "<p>If there is a return statement in try, finally is executed just before the control returns to the outer code.</p>"
    return
    // console.log(ad); 
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log(adddddd); // error
  } finally {
    console.log("Finally always executes.");
    // Close the file.
    // Exit the Loop.
    // Write to the log file.
  }
};

fErr()
console.log("End")
console.log("The Script is still running.");
