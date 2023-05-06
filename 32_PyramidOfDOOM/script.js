// Pyramid Of DOOM Or CallBack Hell

// When we have callback inside callback the code  difficult to manage.

//  Example Code For Callback Hell

/*
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loaded Script with src=" + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Unable to Loaded Script with src=" + src);
    // document.body.style.backgroundColor="red";
    callback(new Error("Load Script Error"));
    setInterval(async function () {
      document.querySelector("#alrt").classList.toggle("alrt");
    }, 300);
  };
  document.body.appendChild(script);
}

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js",
  function goodmorning(error, src) {
    if (error) {
      console.log(error);
      sendEmergencyMessageToCEO();
      return;
    }
    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap2.min.js",
      function goodmorning(error, src) {
        if (error) {
          console.log(error);
          sendEmergencyMessageToCEO();
          return;
        }
        loadScript(
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap3.min.js",
          function goodmorning(error, src) {
            if (error) {
              console.log(error);
              sendEmergencyMessageToCEO();
              return;
            }
            loadScript(
              "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap4.min.js",
              function goodmorning(error, src) {
                if (error) {
                  console.log(error);
                  sendEmergencyMessageToCEO();
                  return;
                }
                loadScript(
                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap5.min.js",
                  function goodmorning(error, src) {
                    if (error) {
                      console.log(error);
                      sendEmergencyMessageToCEO();
                      return;
                    }
                    loadScript(
                      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap6.min.js",
                      function goodmorning(error, src) {
                        if (error) {
                          console.log(error);
                          sendEmergencyMessageToCEO();
                          return;
                        }
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);

*/



// As calls become more nested, Code becomes deeper and increasing more difficult to manage, especially if we have real code instead ...
// This is called "Call Back Hell "or "Pyramid of Doom".

// The Pyramid of these calls grows towards the right with every asynchronous action.Soon it spirals out of control.So the way  of coding isnt very good!

// The Solution to callback Hell is "Promises" 

// A Promise is a "Promise of code execution". The code either executes or fails,in both the cases the subscriber will be notified.



