// onload take to top of the screen
window.onload = function () {
  window.scrollTo(0, 0);
};

// navbar toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav_link");

  // Toggle menu visibility
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Close menu after clicking a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
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

// navbar

// Select all nav links
const navLinks = document.querySelectorAll(".nav_link");

// Function to handle click event
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active_link' class from all nav items
    navLinks.forEach((nav) => {
      nav.parentElement.classList.remove("active_link");
    });

    // Add 'active_link' class to the clicked nav item
    this.parentElement.classList.add("active_link");
  });
});

// auto changing text on home page
var typed = new Typed(".typing", {
  strings: [
    "Software Engineer Student",
    "Student Ambassador",
    "Help Desk Line Technician ",
    "Software Developer",
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
    "Software Developer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

//about page education/experience button

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

// MIXITUP FILTER Project
const mixer = mixitup(".containerproject", {
  selectors: {
    target: ".card",
  },
  animation: {
    duration: 800,
  },
});

// Link active Project
const linkProject = document.querySelectorAll(".project_item");

function activeProject() {
  if (linkProject) {
    linkProject.forEach((L) => L.classList.remove("active-project"));
    this.classList.add("active-project");
  }
}
linkProject.forEach((L) => L.addEventListener("click", activeProject));
