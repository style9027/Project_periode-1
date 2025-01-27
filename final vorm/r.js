// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark_mode');
}

// Cookie Consent
function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    document.cookie = "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 30;
}

window.onload = function () {
    if (document.cookie.indexOf('cookieConsent=true') !== -1) {
        document.getElementById('cookie-banner').style.display = 'none';
    }
};

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Countdown
const targetDate = new Date("2024-12-31T00:00:00").getTime();
const interval = setInterval(function () {
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
