const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
});

const menu = document.querySelector("#menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    ul.classList.toggle("show");
})

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
link.addEventListener("click", () => {
    ul.classList.remove("show");
})
);
