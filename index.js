const start_timer = document.querySelector('.start'), stop_timer = document.querySelector('.end');
var x = document.getElementById("myAudio");
const audio = new Audio();
audio.src ="./Y2Mate.is - Just do it(short)-Hhwms1gbk-Q-160k-1659062999978.mp3";
let seconds = 0;
let interval = null;
    start_timer.addEventListener("click", start);
    stop_timer.addEventListener("click", () => {
        seconds = 0;
        audio.pause();
    });
function timer(){
    seconds++;
    let secs = seconds % 60;
    if(secs%300 === 0){
        audio.play();
     }
}
function start(){
    if(interval){
        return;
    }
   interval = setInterval(timer, 1000); 
}
function stop(){
    clearInterval(interval);
    interval = null;
}