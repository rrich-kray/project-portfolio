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
    ghRepository: "",
    deploymentLink: "",
    description:
      "Node.js application that programmatically generates HTML containing a team profile",
    backgroundImage: "https://wallpaperaccess.com/full/4091251.png",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    ghRepository: "",
    deploymentLink: "",
    description:
      "Dashboard that displays current and forecasted weather data from the OpenWeatherMap API",
    backgroundImage: "https://wallpaperaccess.com/full/4091251.png",
  },
  {
    id: 4,
    name: "Weather Dashboard",
    ghRepository: "",
    deploymentLink: "",
    description:
      "Dashboard that displays current and forecasted weather data from the OpenWeatherMap API",
    backgroundImage: "https://wallpaperaccess.com/full/4091251.png",
  },
  {
    id: 5,
    name: "Weather Dashboard",
    ghRepository: "",
    deploymentLink: "",
    description:
      "Dashboard that displays current and forecasted weather data from the OpenWeatherMap API",
    backgroundImage: "https://wallpaperaccess.com/full/4091251.png",
  },
  {
    id: 6,
    name: "Weather Dashboard",
    ghRepository: "",
    deploymentLink: "",
    description:
      "Dashboard that displays current and forecasted weather data from the OpenWeatherMap API",
    backgroundImage: "https://wallpaperaccess.com/full/4091251.png",
  },
  {
    id: 7,
    name: "Weather Dashboard",
    ghRepository: "",
    deploymentLink: "",
    description:
      "Dashboard that displays current and forecasted weather data from the OpenWeatherMap API",
    backgroundImage: "https://wallpaperaccess.com/full/4091251.png",
  },
];

const carouselBtns = document.querySelectorAll("[data-carousel-button]");
const columnClasses = [
  "grid-column-span-1",
  "grid-column-span-2",
  "grid-column-span-3",
];

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

    let start = Date.now();

    let timer = setInterval(() => {
      let timePassed = Date.now() - start;
      if (timePassed >= 2000) {
        clearInterval(timer);
        return;
      }

      //   fadeOut(timePassed, document.querySelector(".landing__page"));

      if (offset === 1) {
        fadeIn(document.querySelector(".projects__title"));
        return;
      }
      //   fadeIn(timePassed, document.querySelector(".contact-page"));

      contactPageFadeIn(timePassed);
    }, 20);
  });
});

const fadeOut = (element) => {
  //   const currentPos = element.getBoundingClientRect();
  //   console.log(currentPos);
  element.style.top -= `${5}%`;
  element.style.opacity -= 0.01;
  console.log(element.style.top);
};

const fadeIn = (element) => {
  //   const currentPos = element.getBoundingClientRect();
  //   console.log(currentPos);
  element.style.top += `${5}px`;
  element.style.opacity += 0.01;
};

projects.forEach((project) => {
  let projectsSection = document.querySelector(".projects");
  projectsSection.innerHTML += `

    <div class="project__tile" style="background-image: url(${project.backgroundImage})">

        <div class="panel">
            <h5 style="background-image: url(${project.backgroundImage})">${project.name}</h5>
            <p style="background-image: url(${project.backgroundImage})">${project.description}</p>
        </div>

        <div class="ribbon git"><img src="../images/github-svgrepo-com.svg" alt=""><a href=${project.ghRepository}></a></img></div>
        <div class="ribbon deployed"><img src="../images/www.svg" alt=""><a href=${project.deployed}></a></img></div>

    </div>
            
    `;
});
