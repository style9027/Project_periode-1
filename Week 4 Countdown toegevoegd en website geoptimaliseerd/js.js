const targetDate = new Date("2024-12-31T00:00:00").getTime();

const interval = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;


    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "De datum is bereikt!";
    }
}, 1000);
