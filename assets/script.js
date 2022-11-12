var timer = document.getElementById("timer");

//timer
var count = 60, timer = setInterval(function() {
    $("#counter").html(count--);
    if(count == 1) clearInterval(timer);
}, 1000);