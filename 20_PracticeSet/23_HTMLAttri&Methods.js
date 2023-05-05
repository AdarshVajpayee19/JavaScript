console.log(first.getAttribute("class"))

console.log(document.getElementsByTagName("div")[0].getAttribute("class"))
console.log(document.getElementsByTagName("div")[0].hasAttribute("class"))
console.log(document.getElementsByTagName("div")[0].hasAttribute("id"))
console.log(document.getElementsByTagName("div")[0].hasAttribute("id1"))
// first.setAttribute("hidden","true")

first.setAttribute("class","changeColor margin-right padding")

// first.removeAttribute("class")
console.log(first.attributes)


// data-* attribute:

// We can always create custom attributes but the ones starting with "data-*" are reserved for programmers use. they are available in a property
// named dataset.

console.log(first.dataset)
console.log(first.dataset.player)
console.log(first.dataset.game)
