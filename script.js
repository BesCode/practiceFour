const menu = document.querySelector(".menu");
const mobile = document.querySelector(".mobileNav");
const lists = document.querySelectorAll("li");

menu.addEventListener("click", handleMenu)

function handleMenu(){
    mobile.classList.toggle("close")
}
