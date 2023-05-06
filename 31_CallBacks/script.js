/*
function loadScript(src) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded Script with src=" + src);
    };
    document.body.appendChild(script);
}

loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
    );
*/ 



// Callbacks

/*
function loadScript(src,callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded Script with src=" + src);
        callback();
    };
    document.body.appendChild(script);
}

function hello(){
    alert("Hello")
}

function goodmorning(){
    alert("goodmorning")
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js",hello);

*/



function loadScript(src,callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded Script with src=" + src);
        callback(null,src);
    };
    script.onerror = function () {
        console.log("Unable to Loaded Script with src=" + src);
        // document.body.style.backgroundColor="red";
        callback(new Error("Load Script Error"));
        setInterval(async function(){
            document.querySelector("#alrt").classList.toggle("alrt");
        },300)
    };
    document.body.appendChild(script);
}

function hello(error,src){
    if(error){
        alert(error);
        return;
    }
    alert("Hello Adarsh "+ src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js",hello);


// if Above Src : https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js (loaded only red page visible)
// if Above Src : https://cdn.jssdfsfdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js (Failed to get loaded red-toggle page visible)
