function play()
{
    var audio = new Audio('Barfi.mp3')
    audio.play()
}

// setInterval(()=>{
//     let d = new Date()
//     // time.innerHTML = d.toDateString() + " "+d.toString()
// },1000)

const setAlarm = (seconds) =>{
    let d = new Date().getTime()

    setTimeout(()=>{
        play()
    },seconds*1000)

    setInterval(()=>{
        secondsLeft = -(new Date().getTime() - (d + seconds*1000))
        if(secondsLeft > 0)
        {
            alarm.innerHTML = "Alarm ringing in "+Math.floor(secondsLeft/1000)+" seconds";
        }
    })
}

let s = prompt("After how many seconds do u want an alarm: ")
setAlarm(parseInt(s))  

