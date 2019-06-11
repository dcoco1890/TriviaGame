let correct = 0;
let wrong = 0;
let unaswer = 0;

$('#start').on("click", function () {
    $('#content').removeClass("d-none");
    $('#start').addClass("d-none");
    
});

$('#submit').on("click", function () {
    $('#content').remove();
    
});