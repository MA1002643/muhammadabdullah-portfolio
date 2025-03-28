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

let activeButton = null;

buttons.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.matches("button")) {
    const { id } = e.target.dataset;
    const selector = `.rownew[id="${id}"]`;
    const targetPanel = document.querySelector(selector);

    if (e.target === activeButton) {
      targetPanel.classList.remove("show1");
      activeButton = null;
    } else {
      panels.forEach((panel) => panel.classList.remove("show1"));
      targetPanel.classList.add("show1");
      activeButton = e.target;
    }
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

// Home page -> Year of Experience, Project completed, Technologies Mastered and code commits

document.addEventListener("DOMContentLoaded", () => {
  const updateCounter = (counter, target) => {
    let current = 0;
    const increment = Math.ceil(target / 100);
    const update = () => {
      if (current < target) {
        current += increment;
        counter.innerText = Math.min(current, target);
        setTimeout(update, 100);
      } else {
        counter.innerText = target;
      }
    };
    update();
  };

  // Initialize counters for Years of Experience and Projects Completed
  const initializeCounters = () => {
    const yearsExperienceElement = document.getElementById("years-experience");
    const projectsCompletedElement =
      document.getElementById("projects-completed");

    const calculateExperience = () => {
      const startDate = new Date("2021-09-24");
      const today = new Date();
      const currentYear = today.getFullYear();
      return today >= new Date(currentYear, 8, 24)
        ? currentYear - startDate.getFullYear()
        : currentYear - startDate.getFullYear() - 1;
    };

    // Set Years of Experience
    const yearsExperience = calculateExperience();
    updateCounter(yearsExperienceElement, yearsExperience);

    // Count Projects Completed
    const projectCards = document.querySelectorAll(".containerproject .card");
    const projectsCompleted = projectCards.length;
    updateCounter(projectsCompletedElement, projectsCompleted);
  };

  // Fetch total commits from GitHub repositories
  const fetchTotalCommits = async () => {
    const repositories = [
      "MA1002643/Personal-Portfolio",
      "MA1002643/FoodWebsite",
      "Wellbeing-Unisys/WellbeingUnisys",
      "MA1002643/Glowing-Gradient-Circle-Text-Animation",
      "MA1002643/HangMan",
      "MA1002643/Simple_Rectangle",
      "MA1002643/Button_Code",
      "MA1002643/AMC",
      "MA1002643/Programming-Two",
      "MA1002643/Programming-One",
      "MA1002643/Singer-Website",
      "MA1002643/Grade-Calculator",
      "MA1002643/Article-Server",
      "MA1002643/First-Year-Final-Group-Project",
      "MA1002643/CodeQuality",
      "MA1002643/BlackjackSim",
      "MA1002643/CahtWeb",
      "ManMetMobComp/mobcomp-assessment-MA1002643",
    ];

    const githubToken = "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"; // Add your token here
    const headers = githubToken
      ? { Authorization: `token ${githubToken}` }
      : {};

    let totalCommits = 0;

    for (const repo of repositories) {
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        try {
          const response = await fetch(
            `https://api.github.com/repos/${repo}/commits?per_page=100&page=${page}`,
            { headers }
          );

          if (!response.ok)
            throw new Error(`Failed to fetch commits for ${repo}`);

          const commits = await response.json();
          totalCommits += commits.length;

          if (commits.length < 100) hasMore = false; // End of paginated results
          page++;
        } catch (error) {
          console.error(`Error fetching commits for ${repo}:`, error);
          hasMore = false;
        }
      }
    }

    const codeCommitsElement = document.getElementById("code-commits");
    updateCounter(codeCommitsElement, totalCommits);
  };

  // Populate the number of skills mastered
  const updateTechnologiesMasteredCount = () => {
    const technologiesCountElement =
      document.getElementById("technologies-count");

    // Count the number of skills__data elements
    const skillsCount = document.querySelectorAll(".skills__data").length;

    // Update the counter dynamically
    updateCounter(technologiesCountElement, skillsCount);
  };

  // Observe changes in skills__data elements to update technologies count dynamically
  const observeSkillsChanges = () => {
    const observer = new MutationObserver(updateTechnologiesMasteredCount);
    const skillsContainer = document.querySelector(".skills__container");
    if (skillsContainer) {
      observer.observe(skillsContainer, { childList: true, subtree: true });
    }
  };

  // Initialize all counters
  initializeCounters();
  fetchTotalCommits();

  // Initialize Skills Mastered Counter
  updateTechnologiesMasteredCount();
  observeSkillsChanges();
});
