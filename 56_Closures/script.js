message = "Gudu bhaiya bring tea"

function helo1()
{
    let message = "Babul bhai kya yaar"
    // console.log("Hello,"+message)

    let c = function helo2()
    {
        console.log("kaam kaam kaam," + message)
    }
    return c
}

c = helo1()
c()

/*

Closures : is a combination of a function bundled to gether(enclosed) with references to its 
Surrounding state (the Lexical environment). In other words, a closures gives you access to an outer 
function scope from an inner function.
*/

// Another Example for closure

function init()
{
    var name = "Adarsh";
    function displayName()
    {
        console.log(name);
    }
    name = "Ashish"
    return displayName; // returns the reference so ashish is returned becoz adarsh changed to ashish later since we r sending references of variable around the function (lexical Environment).
}

let c1 = init()
c1()

function returnFunc()
{
    const x=()=>{
        let a = 10
        console.log(a)
        const y = ()=>{
            console.log(a)     
            const z = ()=>{
                console.log(a)
            }
            z()
        }
        a = 30
        y()
    }
    return x
}

let a = returnFunc()
a()
