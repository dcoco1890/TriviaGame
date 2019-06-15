let correct = 0;
let wrong = 0;
let unaswer = 0;
let time = 30;
let isRunning = false;
let isOver = false;


var timer = function timer() { 
    
    if(!isRunning && !isOver){
        $('#time-name').text("Time");
        $('#timer').text(time);
        time--;
        isRunning = true;
    }
    else if(!isOver){
        
        if(time >= 0){
            $('#timer').text(time);
            time--;
        }
        else{
            isOver = true;
            clearInterval(interval);
            end();
        }
        
    }
    
 }

function start(){
    $('#content').removeClass("d-none");
    $('#x').remove();
    interval = setInterval(timer, 1000);
    
    // timer();
}

function end () {
    

    $('#content').attr("class", "d-none");
}

 window.onload = function (){
    $('#start').on("click", start);
    $('#submit').on("click", end);

 }

 



