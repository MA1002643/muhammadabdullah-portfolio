const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 980 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

// when scroll down navbar changes color

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
});

// slide-up script
$(".scroll-up-btn").click(function () {
  $("html").animate({ scrollTop: 0 });
  $("html").css("scrollBehavior", "auto");
});

//scroll bar

const progressBarContainer = document.querySelector("#progressBarContainer");
const progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
let debounceResize;

window.addEventListener(
  "scroll",
  () => {
    let newProgressHeight = window.pageYOffset / totalPageHeight;
    progressBar.style.transform = `scale(1,${newProgressHeight})`;
    progressBar.style.opacity = `${newProgressHeight}`;
  },
  {
    capture: true,
    passive: true,
  }
);

window.addEventListener("resize", () => {
  clearTimeout(debounceResize);
  debounceResize = setTimeout(() => {
    totalPageHeight = document.body.scrollHeight - window.innerHeight;
  }, 200);
});

progressBarContainer.addEventListener("click", (e) => {
  let newPageScroll =
    (e.clientY / progressBarContainer.offsetHeight) * totalPageHeight;
  window.scrollTo({
    top: newPageScroll,
    behavior: "smooth",
  });
});

// auto changing text on home page
var typed = new Typed(".typing", {
  strings: [
    "Software Engineer Student",
    "Student Ambassador",
    "Help Desk Line Technician ",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// auto changing text on about page
var typed = new Typed(".typing-2", {
  strings: [
    "Software Engineer Student",
    "Student Ambassador",
    "Help Desk Line Technician ",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

//about page education experience button

const buttons = document.querySelector(".buttonsabout");
const panels = document.querySelectorAll(".rownew");

buttons.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.matches("button")) {
    panels.forEach((panel) => panel.classList.remove("show1"));

    const { id } = e.target.dataset;

    const selector = `.rownew[id="${id}"]`;

    document.querySelector(selector).classList.add("show1");
  }
}

//about page text animation

window.addEventListener("scroll", () => {
  const animation = document.querySelector(".secContent");

  const position = animation.getBoundingClientRect().top;

  const screenPosition = window.innerHeight;
  if (screenPosition > position) {
    animation.classList.add("active");
  }
});

// Qaulification page

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// for logo loader

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
