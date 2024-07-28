const works = [
  {
    year: "2022",
    image: "image/project 1.jfif",
    altToImage: "First project",
    hoverText: "Project 1",
  },
  {
    year: "2022",
    image: "image/project 2.jpg",
    altToImage: "Second project",
    hoverText: "Project 2",
  },
  {
    year: "2022",
    image: "image/project 3.jpg",
    altToImage: "Third project",
    hoverText: "Project 3",
  },
  {
    year: "2023",
    image: "image/project 1.jfif",
    altToImage: "Third project",
    hoverText: "Project 3",
  },
  {
    year: "2024",
    image: "image/project 4.jpg",
    altToImage: "First project",
    hoverText: "Project 1",
  },
  {
    year: "2024",
    image: "image/project 2.jpg",
    altToImage: "Second project",
    hoverText: "Project 2",
  },
];

const jsWorks = document.querySelector(".js-works");
const jsWorksSwitchers = document.querySelectorAll(".js-works-switcher");

// Displaying all works as the page loads
displayAllWorks(jsWorks);

jsWorksSwitchers.forEach((jsWorksSwitcher) => {
  jsWorksSwitcher.addEventListener("click", () => {
    if (!jsWorksSwitcher.classList.contains("clicked-work")) {
      // Collecting the text inside the switcher above my experience section
      const switcherText = jsWorksSwitcher.innerText;

      removeClass(jsWorksSwitchers);
      jsWorksSwitcher.classList.add("clicked-work");

      if (switcherText === "All works") {
        displayAllWorks(jsWorks);
      } else {
        displayWorks(switcherText, jsWorks);
      }
    }
  });
});

// Removes Class from the switcher/Links that switch the works
function removeClass(jsWorksSwitchers) {
  jsWorksSwitchers.forEach((jsWorksSwitcher) => {
    if (jsWorksSwitcher.classList.contains("clicked-work")) {
      jsWorksSwitcher.classList.remove("clicked-work");
    }
  });
}

// Display Works as user click on a particular year(our experience switcher)
function displayWorks(switcherText, jsWorks) {
  let worksContent = "";

  works.forEach((index) => {
    if (index.year === switcherText) {
      const content = `<div class="col-md-4 position-relative">
            <img
              src="./${index.image}"
              alt="${index.altToImage}"
              class="img-fluid object-fit-fill w-100 h-100 wow fadeInRight"
              data-wow-delay="0.2s"
            />
            <p class="position-absolute fs-3">${index.hoverText}</p>
          </div>`;

      worksContent += content;
    }
  });

  jsWorks.innerHTML = worksContent;
}

// Display all Works as user click on a particular year(our experience switcher)
function displayAllWorks(jsWorks) {
  let worksContent = "";

  works.forEach((index) => {
    const content = `<div class="col-md-4 position-relative">
            <img
              src="./${index.image}"
              alt="${index.altToImage}"
              class="img-fluid object-fit-fill w-100 h-100 wow fadeInRight"
              data-wow-delay="0.2s"
            />
            <p class="position-absolute fs-3">${index.hoverText}</p>
          </div>`;

    worksContent += content;
  });

  jsWorks.innerHTML = worksContent;
}
