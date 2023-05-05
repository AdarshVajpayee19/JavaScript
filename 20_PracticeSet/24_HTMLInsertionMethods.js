let a = document.getElementsByTagName("div")[0]

let div  = document.createElement("div");
div.innerHTML = "<h1>Hello Adarsh Bhai</h1>";

a.appendChild(div);

// a.removeAttribute("hidden");
a.prepend(div);
// a.before(div);
a.after(div);
// a.replaceWith(div);

