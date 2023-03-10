// C O U N T D O W N //

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2024 00:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    var daysStr = days > 1 ? " <small>days</small> " : " <small>day</small> ";
    var hoursStr = days > 1 ? " <small>hours</small> " : " <small>hour</small> ";
    var minsStr = days > 1 ? " <small>minutes</small>     " : " <small>minute</small>     ";
    // var daysStr = days > 1 ? " D " : " D ";
    // var hoursStr = days > 1 ? " H " : " H ";
    // var minsStr = days > 1 ? " M     " : " M    ";
    document.getElementById("demo").innerHTML = days + daysStr + hours + hoursStr
        + minutes + minsStr + seconds + " <small>seconds</small>   ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
