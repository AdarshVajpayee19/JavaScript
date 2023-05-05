// 1.Create a navBar and change the color of its first element to red.
// 1.soln
// document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"
// or
// document.getElementsByTagName("li")[0].style.color="Yellow"

// 2. Create the table without tbody now use View page source Button to check Whether it has a tbody or not

// Browser Automatically Adds tbody if u didnt mention check by inspect.

// 3. Create an element with 3 children now change the color of first and last element to green

document.getElementsByTagName("nav")[0].firstElementChild.style.color="green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color="green"

// 4.write a javascript code to change background of all <li> tags to cyan.
Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.backgroundColor="cyan";
})
