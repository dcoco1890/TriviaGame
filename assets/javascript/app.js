let correct = 0;
let wrong = 0;
let unaswer = 0;
let time = 30;
let isRunning = false;


var timer = function timer() { 
    
    if(!isRunning){
        $('#time-name').text("Time");
        isRunning = true;
    }
    $('#timer').text(time);
    time--;
 }

function start(){
    $('#content').removeClass("d-none");
    $('#x').remove();
    let interval = setInterval(timer, 1000);
    // timer();
}

function end () {
    $('#content').remove();
}

 window.onload = function (){
    $('#start').on("click", start);
    $('#submit').on("click", end);
 }



