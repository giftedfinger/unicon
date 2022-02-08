// window.onload = function() {

const body = document.querySelector('.body');
const time = document.querySelector('.time');
const days = document.querySelector('.day');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let slide = []
    // Set the date we're counting down to
var countDownDate = new Date("febuary, 2022 15:37:25").getTime();

// Update the count down every 1 second
function SetDate() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var day = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    days.innerHTML = day;
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;

    if (day === 0) {
        seconds.classList.add('.circle')
    }


    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
};
setInterval(SetDate, 1000)
    // }