const container = document.querySelector(".container");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


const displayGreeting = () => {
  const timeNow = new Date().getHours();
  const greeting = timeNow >= 5 && timeNow < 12
    ? "Goede morgen"
    : timeNow >= 12 && timeNow < 18
    ? "Goede middag"
    : "Goede avond";
  container.innerHTML = `<h1>${greeting}</h1>`;
};
displayGreeting();


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
