<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<h1 align="center">MUHAMMADABDULLAH-PORTFOLIO</h1>
<p align="center"><em>Showcase Your Skills, Inspire Future Opportunities<em></p>

<!-- BADGES -->
<div align="center">
<a href="https://github.com/MA1002643/muhammadabdullah-portfolio/blob/main/LICENSE" alt="license">
   <img src="https://img.shields.io/badge/license-MIT-green?style=flat&logo=opensourceinitiative&logoColor=white" alt="MIT License" />
</a>
<img src="https://img.shields.io/github/last-commit/MA1002643/muhammadabdullah-portfolio?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<a href="https://github.com/MA1002643/jokes-platform/discussions" alt="Discussions">
   <img src="https://img.shields.io/github/discussions/MA1002643/jokes-platform" alt="Discussions" />
</a>
<a href="https://github.com/MA1002643/muhammadabdullah-portfolio/stargazers">
   <img src="https://custom-icon-badges.demolab.com/github/stars/MA1002643/jokes-platform?logo=star&style=flat" alt="stars" />
</a>
<a href="https://github.com/MA1002643/muhammadabdullah-portfolio/issues">
   <img src="https://custom-icon-badges.demolab.com/github/issues-raw/MA1002643/jokes-platform?logo=issue" alt="issues" />
</a>
</div>
<br>
<br>
<div align="center"><em>Built with the tools and technologies:</em></div>
<br>
<br>
<!-- TECH-STACK:START -->

<div align="center" style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;justify-content:center;margin:0 auto;">
<img src="https://img.shields.io/badge/swiper-6332F6.svg?style=flat&logo=swiper&logoColor=white" alt="swiper">
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=flat&logo=css3&logoColor=white" alt="CSS3">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=javascript&logoColor=white" alt="JavaScript">
</div>

<!-- TECH-STACK:END -->
</div>
<br>

---

## 📄 Table of Contents

- [Overview](#-overview)
- [UI Preview](#-ui-preview)
- [Features](#-features)
- [Project Structure](#-project-structure)
  - [Project Index](#-project-index)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#-installation)
  - [Usage](#-usage)
  - [Testing](#-testing)
- [Learning Outcomes](#-learning-outcomes)
- [Roadmap](#-roadmap)
- [Acknowledgment](#-acknowledgment)
- [License](#-license)

---

<a id="overview"></a>

## ✨ Overview

Muhammad Abdullah's portfolio is a sleek, single-page web application showcasing developer skills, projects, and stats with engaging animations and real-time data integration.  
**Why muhammadabdullah-portfolio?**

This project provides a comprehensive, responsive portfolio website architecture, combining modern design, interactive features, and optimised server configurations for a seamless developer showcase. The core features include:

- 🖥️ **Responsive Design:** Ensures a seamless experience across all devices with modern styling and animations.
- 🚀 **Performance Optimization:** Utilises server configurations like GZIP compression and caching for fast load times.
- 🔧 **Dynamic Content:** Integrates external APIs for real-time stats and counters to showcase ongoing activity.
- 🎨 **Interactive UI Elements:** Features sliders, filtering, animated text, and carousels to enhance user engagement.
- 🔒 **Security & Reliability:** Implements security headers and redirects for a secure hosting environment.
- 📊 **Rich Project Showcases:** Presents projects with multimedia, filtering, and detailed descriptions to highlight technical skills.

---

<a id="ui-preview"></a>

## 🎨 UI Preview

|                 Recipe Search                  |                Dashboard                |
| :--------------------------------------------: | :-------------------------------------: |
| ![Website screenshot](screenshots/Website.png) | ![Website GIF](Screenshots/Website.gif) |

---

<a id="features"></a>

## 📌 Features

|     | Component         | Details                                                                                                                                                                                               |
| :-- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Modern portfolio built with **Next.js**</li><li>Multi-section single-page layout</li><li>Responsive design using **Tailwind CSS**</li></ul>                                                   |
| 🔩  | **Code Quality**  | <ul><li>Clean, maintainable component-based structure</li><li>Consistent coding standards and semantic markup</li><li>Well-organized styling and layout</li></ul>                                     |
| 📄  | **Documentation** | <ul><li>Comprehensive **README** detailing setup, deployment, and project overview</li><li>Descriptive commit messages and inline clarity in components</li></ul>                                     |
| 🔌  | **Integrations**  | <ul><li>Animated transitions powered by **Framer Motion** and **GSAP**</li><li>**Lucide Icons** and **Heroicons** for modern iconography</li><li>Deployed via **Vercel** for seamless CI/CD</li></ul> |
| 🧩  | **Modularity**    | <ul><li>Reusable **React components** for sections like Hero, Projects, and Contact</li><li>Utility-first styling with Tailwind for scalable design</li></ul>                                         |
| 🧪  | **Testing**       | <ul><li>Manual testing through browser and responsive viewports</li><li>Performance and accessibility checks via browser DevTools</li></ul>                                                           |
| ⚡️ | **Performance**   | <ul><li>Optimised for fast load times using **Next.js Image Optimisation**</li><li>Static generation for improved SEO</li><li>Lightweight animations and minimal dependencies</li></ul>               |
| 🛡️  | **Security**      | <ul><li>Static frontend with no user data collection</li><li>Served securely over HTTPS via Vercel</li></ul>                                                                                          |
| 📦  | **Dependencies**  | <ul><li>Core: **Next.js**, **React**, **Tailwind CSS**</li><li>Animation: **Framer Motion**, **GSAP**</li><li>Icons: **Lucide React**, **Heroicons**</li></ul>                                        |

---

<a id="project-structure"></a>

## 📁 Project Structure

```sh
└── muhammadabdullah-portfolio/
├── css/
│   ├── about.css
│   ├── contactme.css
│   ├── footer.css
│   ├── home.css
│   ├── navbar.css
│   ├── owl.carousel.min.css
│   ├── projects.css
│   ├── qualifications.css
│   └── scrollbar.css
├── docs/
│   └── audit/
│       ├── AUDIT.md
│       └── lighthouse-baseline-mobile.json
├── images/
│   ├── Project/
│   │   ├── Chatroom.webp
│   │   ├── IMRAN KHAN.webp
│   │   └── man.webp
│   ├── Qualification/
│   │   ├── 2022 Code of Ethics Training & Certification.webp
│   │   ├── 2023 Unisys Data Privacy Training.webp
│   │   ├── ACT_Awareness_eLearning_page.webp
│   │   ├── ACT_for_Education.webp
│   │   ├── Attendance-1.webp
│   │   ├── Attitude to Learning-1.webp
│   │   ├── B.1 Certificate.webp
│   │   ├── BCS Level 2 ECDL Certificate in IT Appliction Skills (QCF)-1.webp
│   │   ├── Behaviour-1.webp
│   │   ├── CCTV Certificate.webp
│   │   ├── Certificate.pdf
│   │   ├── Emergency First Aid at Work.webp
│   │   ├── Enrichment-1.webp
│   │   ├── GCSE English-1.webp
│   │   ├── GCSE Maths-1.webp
│   │   ├── Get Licensed Cyber Security.webp
│   │   ├── Get Licensed Fire Marshal.webp
│   │   ├── Get Licensed Introduction to Risk Assessment.webp
│   │   ├── Get Licensed Mental Health Awareness.webp
│   │   ├── Get Licensed Workplace Health and Safety.webp
│   │   ├── Hundcuff Certificate.webp
│   │   ├── Intellectual Property &Trade Secrets.webp
│   │   ├── Learner Voice Award 2020-2021-1.webp
│   │   ├── Lockdown Legend-1.webp
│   │   ├── OCNLR Entry Level Certificate in Digital Skills (Entry 3)-1.webp
│   │   ├── OCNLR Level 1 Certificate in Digital Skills-1.webp
│   │   ├── Pearson BTEC Level 3 Extended Diploma-1.webp
│   │   ├── Professionalism-1.webp
│   │   ├── Security Awareness Foundations.webp
│   │   ├── SIA Certificate.webp
│   │   ├── Touch-type Read and Spell Computer Course-1.webp
│   │   ├── Unisys 2022 Data Privacy Training.webp
│   │   ├── Unisys 2023 Data Privacy Training.webp
│   │   ├── Volunteering Award 2018-2019-1.webp
│   │   ├── Workplace Health, Safety, Security Training Module 1.webp
│   │   ├── Workplace Health, Safety, Security Training Module 2.webp
│   │   └── Workplace Health, Safety, Security Training Module 4.webp
│   └── Website/
│       ├── IMG_1374.webp
│       ├── logo.webp
│       └── Maintenance.webp
├── Js/
│   ├── app.js
│   └── mixitup.min.js
├── Projects/
│   ├── Inventroy Application Pics/
│   │   └── Richard Jameson.jpeg
│   ├── Js/
│   │   └── Project.js
│   ├── Projects CSS/
│   │   ├── Project1.css
│   │   ├── Project2.css
│   │   ├── Project3.css
│   │   └── Project4.css
│   ├── Project1.html
│   ├── Project2.html
│   ├── Project3.html
│   └── Project4.html
├── Videos/
│   ├── First Year Project.mp4
│   ├── Imran Khan.mp4
│   └── Personal portfolio.mp4
├── .gitignore
├── background2.webp
├── htaccess
├── index.html
├── LICENSE
├── Muhammad Abdullah CV.pdf
├── package-lock.json
├── package.json
└── README.md
```

---

<a id="project-index"></a>

### 📑 Project Index

<details open>
   <summary><b>MUHAMMADABDULLAH-PORTFOLIO/</b></summary>
   <details>
      <summary><b>__root__</b></summary>
      <ul>
         <li><b><a href="./.gitignore">.gitignore</a></b> — Repository file.</li>
         <li><b><a href="./background2.webp">background2.webp</a></b> — background2.webp</li>
         <li><b><a href="./htaccess">htaccess</a></b> — Repository file.</li>
         <li><b><a href="./index.html">index.html</a></b> — Static HTML markup for a page or template.</li>
         <li><b><a href="./LICENSE">LICENSE</a></b> — Repository file.</li>
         <li><b><a href="./Muhammad Abdullah CV.pdf">Muhammad Abdullah CV.pdf</a></b> — Repository file.</li>
         <li><b><a href="./package-lock.json">package-lock.json</a></b> — Dependency lockfile pinning exact versions for reproducible installs.</li>
         <li><b><a href="./package.json">package.json</a></b> — Node package manifest defining scripts, dependencies and project metadata.</li>
         <li><b><a href="./README.md">README.md</a></b> — Project documentation with overview, setup and usage.</li>
      </ul>
   </details>
   <details>
      <summary><b>.github</b></summary>
      <ul>
         <li><b><a href=".github/CODEOWNERS">CODEOWNERS</a></b> — Repository file.</li>
      </ul>
      <details>
         <summary><b>tmp</b></summary>
      <ul>
         <li><b><a href=".github/tmp/update-index.mjs">update-index.mjs</a></b> — Repository file.</li>
      </ul>
      </details>
      <details>
         <summary><b>workflows</b></summary>
      <ul>
         <li><b><a href=".github/workflows/update-project-index.yml">update-project-index.yml</a></b> — YAML configuration (CI/tooling).</li>
         <li><b><a href=".github/workflows/update-project-structure.yml">update-project-structure.yml</a></b> — YAML configuration (CI/tooling).</li>
         <li><b><a href=".github/workflows/update-tech-badges-single-repo.yml">update-tech-badges-single-repo.yml</a></b> — YAML configuration (CI/tooling).</li>
      </ul>
      </details>
   </details>

   <details>
      <summary><b>css</b></summary>
      <ul>
         <li><b><a href="css/about.css">about.css</a></b> — Stylesheet defining layout and utility classes.</li>
         <li><b><a href="css/contactme.css">contactme.css</a></b> — Stylesheet defining layout and utility classes.</li>
         <li><b><a href="css/footer.css">footer.css</a></b> — Stylesheet defining layout and utility classes.</li>
         <li><b><a href="css/home.css">home.css</a></b> — Stylesheet defining layout and utility classes.</li>
         <li><b><a href="css/navbar.css">navbar.css</a></b> — Stylesheet defining layout and utility classes.</li>
         <li><b><a href="css/owl.carousel.min.css">owl.carousel.min.css</a></b> — Stylesheet defining layout and utility classes.</li>
         <li><b><a href="css/projects.css">projects.css</a></b> — Stylesheet defining layout and utility classes.</li>
         <li><b><a href="css/qualifications.css">qualifications.css</a></b> — Stylesheet defining layout and utility classes.</li>
         <li><b><a href="css/scrollbar.css">scrollbar.css</a></b> — Stylesheet defining layout and utility classes.</li>
      </ul>
   </details>

   <details>
      <summary><b>images</b></summary>
      <details>
         <summary><b>Project</b></summary>
      <ul>
         <li><b><a href="images/Project/Chatroom.webp">Chatroom.webp</a></b> — Chatroom.webp</li>
         <li><b><a href="images/Project/IMRAN KHAN.webp">IMRAN KHAN.webp</a></b> — IMRAN KHAN.webp</li>
         <li><b><a href="images/Project/man.webp">man.webp</a></b> — man.webp</li>
      </ul>
      </details>
      <details>
         <summary><b>Qualification</b></summary>
      <ul>
         <li><b><a href="images/Qualification/2022 Code of Ethics Training & Certification.webp">2022 Code of Ethics Training & Certification.webp</a></b> — 2022 Code of Ethics Training & Certification.webp</li>
         <li><b><a href="images/Qualification/2023 Unisys Data Privacy Training.webp">2023 Unisys Data Privacy Training.webp</a></b> — 2023 Unisys Data Privacy Training.webp</li>
         <li><b><a href="images/Qualification/ACT_Awareness_eLearning_page.webp">ACT_Awareness_eLearning_page.webp</a></b> — ACT_Awareness_eLearning_page.webp</li>
         <li><b><a href="images/Qualification/ACT_for_Education.webp">ACT_for_Education.webp</a></b> — ACT_for_Education.webp</li>
         <li><b><a href="images/Qualification/Attendance-1.webp">Attendance-1.webp</a></b> — Attendance-1.webp</li>
         <li><b><a href="images/Qualification/Attitude to Learning-1.webp">Attitude to Learning-1.webp</a></b> — Attitude to Learning-1.webp</li>
         <li><b><a href="images/Qualification/B.1 Certificate.webp">B.1 Certificate.webp</a></b> — B.1 Certificate.webp</li>
         <li><b><a href="images/Qualification/BCS Level 2 ECDL Certificate in IT Appliction Skills (QCF)-1.webp">BCS Level 2 ECDL Certificate in IT Appliction Skills (QCF)-1.webp</a></b> — BCS Level 2 ECDL Certificate in IT Appliction Skills (QCF)-1.webp</li>
         <li><b><a href="images/Qualification/Behaviour-1.webp">Behaviour-1.webp</a></b> — Behaviour-1.webp</li>
         <li><b><a href="images/Qualification/CCTV Certificate.webp">CCTV Certificate.webp</a></b> — CCTV Certificate.webp</li>
         <li><b><a href="images/Qualification/Certificate.pdf">Certificate.pdf</a></b> — Repository file.</li>
         <li><b><a href="images/Qualification/Emergency First Aid at Work.webp">Emergency First Aid at Work.webp</a></b> — Emergency First Aid at Work.webp</li>
         <li><b><a href="images/Qualification/Enrichment-1.webp">Enrichment-1.webp</a></b> — Enrichment-1.webp</li>
         <li><b><a href="images/Qualification/GCSE English-1.webp">GCSE English-1.webp</a></b> — GCSE English-1.webp</li>
         <li><b><a href="images/Qualification/GCSE Maths-1.webp">GCSE Maths-1.webp</a></b> — GCSE Maths-1.webp</li>
         <li><b><a href="images/Qualification/Get Licensed Cyber Security.webp">Get Licensed Cyber Security.webp</a></b> — Get Licensed Cyber Security.webp</li>
         <li><b><a href="images/Qualification/Get Licensed Fire Marshal.webp">Get Licensed Fire Marshal.webp</a></b> — Get Licensed Fire Marshal.webp</li>
         <li><b><a href="images/Qualification/Get Licensed Introduction to Risk Assessment.webp">Get Licensed Introduction to Risk Assessment.webp</a></b> — Get Licensed Introduction to Risk Assessment.webp</li>
         <li><b><a href="images/Qualification/Get Licensed Mental Health Awareness.webp">Get Licensed Mental Health Awareness.webp</a></b> — Get Licensed Mental Health Awareness.webp</li>
         <li><b><a href="images/Qualification/Get Licensed Workplace Health and Safety.webp">Get Licensed Workplace Health and Safety.webp</a></b> — Get Licensed Workplace Health and Safety.webp</li>
         <li><b><a href="images/Qualification/Hundcuff Certificate.webp">Hundcuff Certificate.webp</a></b> — Hundcuff Certificate.webp</li>
         <li><b><a href="images/Qualification/Intellectual Property &Trade Secrets.webp">Intellectual Property &Trade Secrets.webp</a></b> — Intellectual Property &Trade Secrets.webp</li>
         <li><b><a href="images/Qualification/Learner Voice Award 2020-2021-1.webp">Learner Voice Award 2020-2021-1.webp</a></b> — Learner Voice Award 2020-2021-1.webp</li>
         <li><b><a href="images/Qualification/Lockdown Legend-1.webp">Lockdown Legend-1.webp</a></b> — Lockdown Legend-1.webp</li>
         <li><b><a href="images/Qualification/OCNLR Entry Level Certificate in Digital Skills (Entry 3)-1.webp">OCNLR Entry Level Certificate in Digital Skills (Entry 3)-1.webp</a></b> — OCNLR Entry Level Certificate in Digital Skills (Entry 3)-1.webp</li>
         <li><b><a href="images/Qualification/OCNLR Level 1 Certificate in Digital Skills-1.webp">OCNLR Level 1 Certificate in Digital Skills-1.webp</a></b> — OCNLR Level 1 Certificate in Digital Skills-1.webp</li>
         <li><b><a href="images/Qualification/Pearson BTEC Level 3 Extended Diploma-1.webp">Pearson BTEC Level 3 Extended Diploma-1.webp</a></b> — Pearson BTEC Level 3 Extended Diploma-1.webp</li>
         <li><b><a href="images/Qualification/Professionalism-1.webp">Professionalism-1.webp</a></b> — Professionalism-1.webp</li>
         <li><b><a href="images/Qualification/Security Awareness Foundations.webp">Security Awareness Foundations.webp</a></b> — Security Awareness Foundations.webp</li>
         <li><b><a href="images/Qualification/SIA Certificate.webp">SIA Certificate.webp</a></b> — SIA Certificate.webp</li>
         <li><b><a href="images/Qualification/Touch-type Read and Spell Computer Course-1.webp">Touch-type Read and Spell Computer Course-1.webp</a></b> — Touch-type Read and Spell Computer Course-1.webp</li>
         <li><b><a href="images/Qualification/Unisys 2022 Data Privacy Training.webp">Unisys 2022 Data Privacy Training.webp</a></b> — Unisys 2022 Data Privacy Training.webp</li>
         <li><b><a href="images/Qualification/Unisys 2023 Data Privacy Training.webp">Unisys 2023 Data Privacy Training.webp</a></b> — Unisys 2023 Data Privacy Training.webp</li>
         <li><b><a href="images/Qualification/Volunteering Award 2018-2019-1.webp">Volunteering Award 2018-2019-1.webp</a></b> — Volunteering Award 2018-2019-1.webp</li>
         <li><b><a href="images/Qualification/Workplace Health, Safety, Security Training Module 1.webp">Workplace Health, Safety, Security Training Module 1.webp</a></b> — Workplace Health, Safety, Security Training Module 1.webp</li>
         <li><b><a href="images/Qualification/Workplace Health, Safety, Security Training Module 2.webp">Workplace Health, Safety, Security Training Module 2.webp</a></b> — Workplace Health, Safety, Security Training Module 2.webp</li>
         <li><b><a href="images/Qualification/Workplace Health, Safety, Security Training Module 4.webp">Workplace Health, Safety, Security Training Module 4.webp</a></b> — Workplace Health, Safety, Security Training Module 4.webp</li>
      </ul>
      </details>
      <details>
         <summary><b>Website</b></summary>
      <ul>
         <li><b><a href="images/Website/IMG_1374.webp">IMG_1374.webp</a></b> — IMG_1374.webp</li>
         <li><b><a href="images/Website/logo.webp">logo.webp</a></b> — logo.webp</li>
         <li><b><a href="images/Website/Maintenance.webp">Maintenance.webp</a></b> — Maintenance.webp</li>
      </ul>
      </details>
   </details>

   <details>
      <summary><b>Js</b></summary>
      <ul>
         <li><b><a href="Js/app.js">app.js</a></b> — JavaScript/TypeScript module; classes: from, to; functions: handleClick, activeProject.</li>
         <li><b><a href="Js/mixitup.min.js">mixitup.min.js</a></b> — JavaScript/TypeScript module; functions: must.</li>
      </ul>
   </details>

   <details>
      <summary><b>Projects</b></summary>
      <ul>
         <li><b><a href="Projects/Project1.html">Project1.html</a></b> — Static HTML markup for a page or template.</li>
         <li><b><a href="Projects/Project2.html">Project2.html</a></b> — Static HTML markup for a page or template.</li>
         <li><b><a href="Projects/Project3.html">Project3.html</a></b> — Static HTML markup for a page or template.</li>
         <li><b><a href="Projects/Project4.html">Project4.html</a></b> — Static HTML markup for a page or template.</li>
      </ul>
      <details>
         <summary><b>Inventroy Application Pics</b></summary>
      <ul>
         <li><b><a href="Projects/Inventroy Application Pics/Richard Jameson.jpeg">Richard Jameson.jpeg</a></b> — Richard Jameson.jpeg</li>
      </ul>
      </details>
      <details>
         <summary><b>Js</b></summary>
      <ul>
         <li><b><a href="Projects/Js/Project.js">Project.js</a></b> — JavaScript/TypeScript module.</li>
      </ul>
      </details>
      <details>
         <summary><b>Projects CSS</b></summary>
      <ul>
         <li><b><a href="Projects/Projects CSS/Project1.css">Project1.css</a></b> — Stylesheet defining layout and utility classes.</li>
         <li><b><a href="Projects/Projects CSS/Project2.css">Project2.css</a></b> — Stylesheet defining layout and utility classes.</li>
         <li><b><a href="Projects/Projects CSS/Project3.css">Project3.css</a></b> — Stylesheet defining layout and utility classes.</li>
         <li><b><a href="Projects/Projects CSS/Project4.css">Project4.css</a></b> — Stylesheet defining layout and utility classes.</li>
      </ul>
      </details>
   </details>

   <details>
      <summary><b>Videos</b></summary>
      <ul>
         <li><b><a href="Videos/First Year Project.mp4">First Year Project.mp4</a></b> — Repository file.</li>
         <li><b><a href="Videos/Imran Khan.mp4">Imran Khan.mp4</a></b> — Repository file.</li>
         <li><b><a href="Videos/Personal portfolio.mp4">Personal portfolio.mp4</a></b> — Repository file.</li>
      </ul>
   </details>


</details>

---

<a id="getting-started"></a>

## 🚀 Getting Started

<a id="prerequisites"></a>

### 📋 Prerequisites

This project requires the following dependencies:

- **Programming Language:** HTML
- **Package Manager:** Npm

<a id="installation"></a>

### ⚙️ Installation

Build muhammadabdullah-portfolio from the source and install dependencies:

1. **Clone the repository:**

   ```sh
   ❯ git clone https://github.com/MA1002643/muhammadabdullah-portfolio
   ```

2. **Navigate to the project directory:**

   ```sh
   ❯ cd muhammadabdullah-portfolio
   ```

3. **Install the dependencies:**

   **Using [npm](https://www.npmjs.com/):**

   ```sh
   ❯ npm install
   ```

<a id="usage"></a>

### 💻 Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

<a id="testing"></a>

### 🧪 Testing

Muhammadabdullah-portfolio uses the {**test_framework**} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

<a id="learning-outcomes"></a>

## 🎓 Learning Outcomes

- Designed and developed a **personal portfolio website** to professionally showcase projects, technical skills, and achievements — strengthening practical experience in **frontend architecture**, **component-based design**, and **modern web development workflows**.
- Built the project using **Next.js** for a performant and SEO-friendly React framework, deepening understanding of **server-side rendering (SSR)**, **static site generation (SSG)**, and **optimized routing**.
- Implemented a cohesive **UI/UX design** with **Tailwind CSS**, learning to efficiently manage responsive layouts, dark-themed palettes, and reusable design components consistent across pages.
- Enhanced interactivity and motion design using **Framer Motion** and **GSAP**, gaining proficiency in **animation timing**, **scroll-based effects**, and **smooth visual transitions** that elevate user engagement.
- Structured the codebase with modular **components**, **sections**, and **utility classes**, improving maintainability, scalability, and clarity of the project structure.
- Deployed the website via **Vercel**, acquiring hands-on experience with **continuous deployment**, **GitHub integration**, and **production optimization** for static and hybrid Next.js sites.
- Integrated **Lucide Icons** and **Heroicons** for a consistent, modern iconography style, refining front-end design choices aligned with accessibility and aesthetic standards.
- Documented the repository with a clear **README**, **acknowledgments**, and structured commit history, reinforcing best practices in **version control**, **open-source documentation**, and **project presentation**.
- Improved overall understanding of **modern frontend ecosystems** — combining **React**, **Next.js**, **Tailwind CSS**, and **animation libraries** — to deliver a polished, recruiter-ready personal portfolio.
- Strengthened creative and technical abilities in crafting a **visually distinctive, interactive, and professional web presence**, preparing for real-world UI/UX-driven development roles.

---

<a id="roadmap"></a>

## 📈 Roadmap

- [ ] **`Task 1`**: Implement feature one.
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

<a id="acknowledgment"></a>

## ✨ Acknowledgments

- Design and UI inspiration drawn from modern portfolio aesthetics and community showcases — gratitude to developers and designers who share their creative work across platforms like **Dribbble**, **CodePen**, and **GitHub**, which influenced the visual direction of this portfolio.
- Built with a **Next.js** foundation and styled using **Tailwind CSS**, ensuring a balance between performance, responsiveness, and visual flair — thanks to the **Next.js** and **Tailwind** communities for their exceptional documentation and active ecosystem.
- Deployed seamlessly via **Vercel**, whose streamlined integration with GitHub simplified continuous deployment and preview environments.
- Animated interactions and dynamic scrolling effects powered by **Framer Motion** and **GSAP**, enhancing the overall UX and creating smooth, engaging transitions across sections.
- Appreciation to the **Lucide Icons** and **Heroicons** teams for providing elegant, open-source icon sets that complement the minimalist design of this project.
- A nod to the **open-source developer community** for offering reusable components, guides, and discussions that inspired the layout, scroll animations, and component architecture of this portfolio.

---

<a id="license"></a>

## 📜 License

This project is licensed under the **[MIT License](https://github.com/MA1002643/muhammadabdullah-portfolio/blob/main/LICENSE)**. See the **[LICENSE](https://choosealicense.com/licenses/)** file for full details.

#

<p align="center">
  <strong>© 2025 Muhammad Abdullah</strong><br>
  Developed with 💙 using HTML, CSS, JavaScript<br>
  <a href="#top"><img alt="Back to Top" src="https://img.shields.io/badge/Back_to_Top-0A0A0A?style=for-the-badge">
</a>
</p>
