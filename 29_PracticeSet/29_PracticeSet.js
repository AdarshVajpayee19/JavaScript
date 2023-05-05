document.getElementById("google").addEventListener("click", function(){
    let url = "https://www.google.com/search?q=AdarshVajpayee"
    let win = window.open(url,"","width=700,height=700,scrollbars=yes,resizable=yes")
    // window.location = url;
    win.focus();
})
/*
const fetchContent = async(url)=>{
    con = await fetch(url);
    let a = await con.json()
    return a;
}

setInterval(async function(){
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url));
},3000)
// SetInterval is used for fetching a data.
*/
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb")
},300)

