// You can try with getElementById
let ctitle = document.getElementsByClassName("card-title")
ctitle[0].style.color="Red"
ctitle[1].style.color="Blue"
ctitle[2].style.color="Green"
console.log(ctitle)

// Returns all elements 
let cardBody = document.querySelectorAll(".card-body")
console.log(cardBody)
cardBody[0].style.backgroundColor="grey"
cardBody[1].style.backgroundColor="#d2ef2f"
cardBody[2].style.backgroundColor="grey"


// document.getElementsByTagName


// Returns First Element
document.querySelector(".card-text").style.color = "cyan"
document.querySelector(".card-text").style.backgroundColor = "Yellow"

