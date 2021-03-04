var submit = document.getElementById("play");
let ws = new WebSocket("ws://localhost:8080");
ws.onmessage = message => console.log(`Received: ${message.data}`);
// ws.send("client settings is connected!!!")


submit.onclick = function(){
    const ul = document.querySelectorAll(".ul");
        for (var i = 0; i < ul.length; i++) {
            const checkbox = ul[i].querySelectorAll(".checkbox_info");
            if (checkbox[0].checked === true){
                WallKillSnake = true
                ws.send(`${WallKillSnake}`)
            }
            else {
                WallKillSnake = false
                ws.send(`${WallKillSnake}`)
            }
            console.log(WallKillSnake)
        }
}

