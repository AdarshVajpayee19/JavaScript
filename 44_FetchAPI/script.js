// Java Script can be used to send and return information from the network when needed (AJAX)
// AJAX --> Asynchoronus javascript and XML.

// FETCH API
// fetch is used tpo get data over  the network.
// let promise = fetch(url,[options])
// options not specified then a get request is sent.

/*

let p = fetch("https://goweather.herokuapp.com/weather/Ny")

p.then((response)=>{
    console.log(response.status) // http status code.
    console.log(response.ok) // http status code true boolean. is 200-299
    console.log(response.text)
    console.log(response.formData)
    console.log(response.blob)
    console.log(response.arrayBuffer)
    console.log(response.headers)

    return response.json()
}).then((response)=>{
    console.log(response)
})

// To set a request header in fetch , we can use the header option.
// let res = fetch(url,{
//     headers:Authentication:'secret'
// });

*/


// POST REQUESTS: When need to send large amount data to server.Becoz from get we can limited amount of data.

// to make post request we need to use fetch options

// example

const createTodo = async(todoobj)=>{
    let options = {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(todoobj),
    }
    let p = await fetch("https://jsonplaceholder.typicode.com/posts",options)
    let response = await p.json()
    return response
}

const getTodo = async(id) =>{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts"+id)
    let r = await response.json()
    return r
}

const mainfunc= async()=>{
    let todoobj= {
        title:'Adarsh2',
        body:"bhaiya ji",
        userId:1100,
    }
    let todo = await createTodo(todoobj)
    console.log(todo)
    console.log(await getTodo(5))
    console.log(await getTodo(101))
}


mainfunc()
