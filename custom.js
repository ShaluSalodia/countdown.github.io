// Set the date we're counting down to
var countDownDate = new Date("Sep 7, 2018").getTime();




// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element 
    document.getElementById("day").innerHTML = days + "\n days";

    document.getElementById("hour").innerHTML = hours + "\n hrs";

    document.getElementById("minute").innerHTML = minutes + "\n min";

    document.getElementById("seconds").innerHTML = seconds + "\n sec";


    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Happy Birthday!!!!";
    }
}, 1000);
var d = new Date();
var clueday = d.toDateString().split(" ", 1);
if (clueday == "Sat") {
    location.href = "six.html";
}
else if (clueday == "Sun") {
    location.href = "five.html";
}
else if (clueday == "Mon") {
    location.href = "four.html";
}
else if (clueday == "Tue") {
    location.href = "three.html";
}
else if (clueday == "Wed") {
    location.href = "two.html";
}
else if (clueday == "Thu") {
    location.href = "one.html";
}
else if (clueday == "Fri") {
    location.href = "yourday.html";
}
else
    location.href = "index.html";




