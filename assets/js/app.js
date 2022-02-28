const projects = [
  {
    id: 1,
    name: "Employee Tracker",
    ghRepository: "",
    deploymentLink: "",
    description: "",
    backgroundImage: "",
  },
  {
    id: 2,
    name: "README Generator",
    ghRepository: "",
    deploymentLink: "",
    description: "",
    backgroundImage: "",
  },
  {
    id: 3,
    name: "",
    ghRepository: "",
    deploymentLink: "",
    description: "",
    backgroundImage: "",
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
  });
});

projects.forEach((project) => {
  let rightPanel = document.querySelector(".right__panel");
  let projectTile = document.createElement("div");
  projectTile.classList.add(
    columnClasses[Math.floor(Math.random() * columnClasses.length)],
    "project__tile"
  );
  rightPanel.innerHTML += `

    <div class="panel">
        <h5>${project.name}</h5>
        <p>${project.description}</p>
    </div>

    <img class="background___image" src=${project.backgroundImage}></img>
    <div class="ribbon git"><img src="../assets/images/github-svgrepo-com.svg" alt=""><a href=${project.ghRepository}></a></img></div>
    <div class="ribbon deployed"><img src="../images/www.svg" alt=""><a href=${project.ghRepository}></a></img></div>
            
    `;
  projectsPage.appendChild(projectTile);
});
