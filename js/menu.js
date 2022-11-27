const text = 10;
const text1 = 10;
const text2 = 20;

let menuBottom = document.querySelector(".menu-button");
let menu = document.querySelector(".navbar-bottom");
menuBottom.addEventListener("click", (e) => {
  menu.classList.toggle("navbar-bottom--visible");
  if (menu.classList.contains("navbar-bottom--visible")) {
    // document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});

const text3 = 10;
const text4 = 10;
const text5 = 10;
const text6 = 10;
