const projects = [
  {
    id: 1,
    name: "Employee Tracker",
    ghRepository: "https://github.com/rrich-kray/employee-tracker",
    deploymentLink: "",
    description:
      "Node.js application that utilizes the Inquirer package to record user input and MySQL to store and update employee information.",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/employee-tracker/main/assets/images/screen2.png",
  },
  {
    id: 2,
    name: "Team Profile Generator",
    ghRepository: "https://github.com/rrich-kray/team-profile-generator",
    deploymentLink: "",
    description:
      "Node.js application that programmatically generates HTML containing a team profile",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/team-profile-generator/main/assets/images/screen1.png",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    ghRepository: "https://github.com/rrich-kray/weather-dashboard",
    deploymentLink: "https://rrich-kray.github.io/weather-dashboard/",
    description:
      "Dashboard that displays current and forecasted weather data from the OpenWeatherMap API",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/weather-dashboard/main/assets/images/screen1.png",
  },
  {
    id: 4,
    name: "Professional README Generator",
    ghRepository: "https://github.com/rrich-kray/professional-readme-generator",
    deploymentLink: "",
    description:
      "Programmatically generates professional README files using Node.js.",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/professional-readme-generator/main/assets/images/screen1.png",
  },
  {
    id: 5,
    name: "Taskinator",
    ghRepository: "",
    deploymentLink: "https://rrich-kray.github.io/taskinator/",
    description: "To-Do list application.",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/taskinator/main/assets/images/screen1.png",
  },
  {
    id: 6,
    name: "Horiseon Landing Page",
    ghRepository: "https://github.com/rrich-kray/Your-Landing-Spot-for-Success",
    deploymentLink:
      "https://rrich-kray.github.io/Your-Landing-Spot-for-Success/",
    description: "Landing page for fictional company.",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/Your-Landing-Spot-for-Success/main/Develop/assets/images/landing-page.png",
  },
  {
    id: 7,
    name: "Random Password Generator",
    ghRepository: "https://github.com/rrich-kray/password-generator",
    deploymentLink: "https://rrich-kray.github.io/password-generator/",
    description: "Generates a random password of specified length and content.",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/password-generator/main/Develop/assets/images/RPG.png",
  },
  {
    id: 8,
    name: "Express Note Taker",
    ghRepository: "https://github.com/rrich-kray/express-note-taker",
    deploymentLink: "https://note-taker-rrich-kray.herokuapp.com/",
    description:
      "Application that stores user notes within an express.js server.",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/password-generator/main/Develop/assets/images/RPG.png",
  },
  {
    id: 9,
    name: "Taskmaster Pro",
    ghRepository: "https://github.com/rrich-kray/Taskmaster-Pro",
    deploymentLink: "https://rrich-kray.github.io/Taskmaster-Pro/",
    description: "New and improved task tracking app.",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/Taskmaster-Pro/main/assets/images/screen2.png",
  },
  {
    id: 10,
    name: "Ecommerce Backend",
    ghRepository: "https://github.com/rrich-kray/ecommerce-product-database",
    deploymentLink: "",
    description: "Database for a hypothetical ecommerce website.",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/ecommerce-product-database/master/assets/images/screen1.png",
  },
];

const carouselBtns = document.querySelectorAll("[data-carousel-button]");
const navBtns = document.querySelector("[data-nav-button]");
const columnClasses = [
  "grid-column-span-1",
  "grid-column-span-2",
  "grid-column-span-3",
];
const welcomePhrases = ["Welcome"];

carouselBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const offset = btn.dataset.carouselButton === "next" ? 1 : -1;
    const slides = btn
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex > slides.children.length - 1) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    if (
      document
        .querySelector("[data-active]")
        .classList.contains("projects__page")
    ) {
      loadProjects();
      return;
    }
  });
});

const loadProjects = () => {
  let projectsSection = document.querySelector(".projects");
  projectsSection.innerHTML = ``;
  projects.forEach((project) => {
    projectsSection.innerHTML += `
    
        <div class="project__tile" style="background-image: url(${project.backgroundImage})">
    
            <div class="panel">
                <h5 style="background-image: url(${project.backgroundImage})">${project.name}</h5>
                <p style="background-image: url(${project.backgroundImage})">${project.description}</p>
            </div>
    
            <a href=${project.ghRepository}><div class="ribbon git"><img src="../images/github-svgrepo-com.svg" alt=""></img></div></a>
            <a href=${project.deployed}><div class="ribbon deployed"><img src="../images/www.svg" alt=""></img></div></a>
    
        </div>
                
        `;
  });
};

const formatNavBtns = () => {};

setInterval(() => {
  const landingPage = document.querySelector(".landing__page");
  landingPage.innerHTML = `<h1 class="welcome__text">${
    welcomePhrases[Math.floor(Math.random() * welcomePhrases.length)]
  }</h1>`;
}, 4000);
