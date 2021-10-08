const get_minutes = document.getElementById("minutes");
const get_seconds = document.getElementById("seconds");
const start = document.getElementById("start");
const stopp = document.getElementById("stop");
const reset = document.getElementById("reset");
var interval;   // Interval vai receber o resultado da função após o click, é necessario para as operações stop e reset // Interval will recevied the result of the function after the click, it is neccessery for the stop and reset operations
let minutes = 0;
let seconds = 0;

function startTimer(){  // Função que faz o cronometro iniciar, Function that made the stopwatch begin
    seconds++;
    if(seconds<=9){
     get_seconds.innerHTML = "0" + seconds;
    } 
    else if(seconds>9 && seconds<60){
     get_seconds.innerHTML = seconds;
    }   
    else if(seconds>=60){
        minutes++;
        get_minutes.innerHTML = minutes + ":";
        seconds = 0;
        get_seconds.innerHTML = "0" + 0;
    }
    else if(minutes<9){
        get_minutes.innerHTML = minutes;
    }
            
    
}

start.addEventListener("click", () => {
    interval = setInterval(startTimer, 1000);
})

stopp.addEventListener("click", () => {
    clearInterval(interval);
})

reset.addEventListener("click", () => {
    minutes = 0;
    seconds = 0;
    get_minutes.innerHTML = minutes + ":";
 get_seconds.innerHTML = "0" + seconds;
    clearInterval(interval);

})


