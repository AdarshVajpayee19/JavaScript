console.dir(document.getElementsByTagName("span")[0])

// Console log shows the element DOM tree
// Console dir shows the element as an Object with its properties.

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

document.getElementsByTagName("span")[0].innerHTML ="<i>Adarsh Vajpayee</i>"


// InnerHTML allows to get the HTML inside the element as a string.
// The OuterHTML property contains the full HTML innerHTML + the element itself.

// innerHTML is valid only for element nodes. For Other nodes types we can use nodevalues or data.

console.log(document.body.firstElementChild)
console.log(document.body.firstChild)
console.log(document.body.firstElementChild.nodeValue)

