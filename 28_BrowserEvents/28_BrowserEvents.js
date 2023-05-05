
// let username = prompt("Enter your username:")
// let a = document.getElementsByClassName("container")[0]
// a.onclick = ()=>{
//     let b = document.getElementsByClassName("container")[0]
//     b.innerHTML=`Welcome ${username}!`
// }

let x = function(e){
    console.log(e.target);
    console.log(e)
    alert("1")
}

// let y = function(e){
//     alert("2")
// }

btn.addEventListener('click', x)
// btn.addEventListener('click', y)


// let a2 =prompt("enter 1 or 2: ")
// if(a2 == "2")
// {
//     btn.removeEventListener('click', x)
// }
// While using removeEventListener dont pass function pass the reference i.e x.

