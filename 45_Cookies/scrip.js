// console.log(document.cookie)

/*
go to replit website try in console.

document.cookie
'ajs_anonymous_id=k057gCx5K_FYESro2omyayHc18zcxeo4; _ga=GA1.2.875953619.1680364678; __stripe_mid=4c6c320d-62aa-4d39-a1f4-af4afaeaa4581108cb; hubspotutk=3ba522eb9848d061ab36c521f18b7126; __hstc=205638156.3ba522eb9848d061ab36c521f18b7126.1680364793966.1680364793966.1681150528601.2; ajs_user_id=17443612; amplitudeSessionId=1684399982; _gid=GA1.2.2137480856.1684399984; _gat=1; __stripe_sid=c95c69ff-6652-4502-bae4-a950219cae7932bc16; _dd_s=logs=1&id=2b01edc3-a74e-4413-a36d-5285f562ffc2&created=1684399982137&expire=1684400883451'

*/


// console.log(document.cookie)
// document.cookie = "name = Adarsh"
document.cookie = "name2 = Adarsh Vajpayee"
console.log(document.cookie)

let key = prompt("Enter your key: ")
let value = prompt("Enter your value: ")
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)


// encodeURIComponent --> Used when user gives ; the problem so that it forgots its part of value or key 
// decodeURIComponent --> decode key or value say ;, = present in key or value.
// example:

// decodeURIComponent("1%3D3")
// '1=3'
