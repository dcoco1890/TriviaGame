let correct = 0;
let wrong = 0;
let time = 20;
let isRunning = false;
let isOver = false;
let ua = [];
let aa = ["geo", "kenny", "cartman", "eric", "03", "saddam"];
let interval;

var timer = function timer() {

    if (!isRunning && !isOver) {
        //decrementing time first then displaying it on the page
        //this weird if/else thing just makes sure the isrunning boolean is set
        time--;
        $('#timer').text(time);
        isRunning = true;
    }
    else if (!isOver) {

        if (time > 0) {
            time--;
            $('#timer').text(time);
        }
        else {
            isOver = true;
            isRunning = false;
            clearInterval(interval);
            end();
        }

    }

}


function start() {
    //reset answer counts and user array of answers
    correct = 0;
    wrong = 0;
    ua = [];
    time = 20;
    isOver = false;
    //setting the time on the page first, then I decrement is first in the timer function and display it again.
    //this gives the countdown the appearance of starting immediately.
    $('#time-name').text("Time");
    $('#timer').text(time);  //
    //removes the right/wrong answers if they're there, so multiple elements dont get added
    $('#right').remove();
    $('#wrong').remove();
    $('#content').removeClass("d-none");
    $('#x').attr("class", "d-none");
    //clearing this everytime the start button is clicked just in case
    clearInterval(interval);
    interval = setInterval(timer, 1000);


}

function end() {
    //call to function that checks if answers are correct
    answers();
    clearInterval(interval);
    // if you hit submit while the clock is running
    //and you got more than 5 correct you get a "good job"
    //else you get a times up
    if (isRunning && correct >= 4) {

        if (correct === 6) {
            $('#time-name').text("");
            $('#timer').text("WIN");
        }
        else {
            $('#time-name').text("Good");
            $('#timer').text("JOB");
        }
    }
    else {
        $('#time-name').text("Time");
        $('#timer').text("UP");
    }

    $('#x').attr("class", "start d-flex flex-column justify-content-center");
    $('#content').attr("class", "d-none");


}

function answers() {
    var a = $('input[name=job]:checked').val();
    var b = $('input[name=first]:checked').val();
    var c = $('input[name=name]:checked').val();
    var d = $('input[name=die]:checked').val();
    var e = $('input[name=satan]:checked').val();
    var f = $('input[name=towel]:checked').val();

    ua.push(a, b, c, d, e, f);

    for (var i = 0; i < aa.length; i++) {
        //checking to see if the users answer is included in the answer array
        if (aa.includes(ua[i])) {
            correct++;
        }
        else {
            wrong++;
        }
    }
    // applies the answer cards on the screen
    var right = $(`<div class="card shadow-lg mt-5" id="right"><h4 class="card-header py-1" id="h">Right</h4><div class="display-4" id="f">${correct}</div></div>`);
    var wr = $(`<div class="card shadow-lg mt-5" id="wrong"><h4 class="card-header py-1" id="h">Wrong</h4><div class="display-4" id="f">${wrong}</div></div>`);
    $('#ans').prepend(right, wr);
    

}

window.onload = function () {
    $('#start').on("click", start);
    $('#submit').on("click", end);

}





