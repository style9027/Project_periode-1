function Klik() {
var element = document.body;
element.classList.toggle("dark_mode");
}

function acceptCookies() {
    console.log("Accept button clicked");
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookie banner hidden");

    document.cookie = "cookieConsent=true; path=/; max-age=" + 60*60*24*30;
    console.log("Cookie consent stored");
}

window.onload = function() {
    console.log("Page loaded");
    if (document.cookie.indexOf('cookieConsent=true') !== -1) {
        console.log("Cookie consent already given");
        document.getElementById('cookie-banner').style.display = 'none';
    }
};

