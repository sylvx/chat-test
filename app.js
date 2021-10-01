// 1.0 Variables

let messages = document.querySelector(".messages");
let input = document.querySelector(".input_message");
let button = document.querySelector(".button");
let scrollBar = document.querySelector(".message-box-inner");

// 2.0 Event Listeners
button.addEventListener("click", displayMessage);
button.addEventListener("click", checkHeight);
input.addEventListener("keyup", enterSend);

//3.0 Functions
//3.1 Sending message and sound
function displayMessage(){
    let newMessage = document.createElement("li");
    let audio = document.getElementById("audio");
    newMessage.innerText = input.value;
    // Check if the field is empty
    if (input.value != ""){
        messages.appendChild(newMessage);
        audio.play();
        input.value = "";
    }
}
//3.2 Enable sending message via hitting enter
function enterSend(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        button.click();
      }
}

//3.3 Add scrollbar  and move it to the bottom

function checkHeight(){
    if(scrollBar.offsetHeight > 300){
        scrollBar.style.overflowY = "scroll";
        scrollBar.scrollTo(0,scrollBar.scrollHeight);
    }
}
