const works = [
  {
    year: "2022",
    image:
      "works/2022/PLOT 679, CAD ZONE C04, DAPE DISTRICT, FCT ABUJA (1).png",
    altToImage: "Project work",
    hoverText: "Project 1",
    linkToFile:
      "works/2022/PLOT 679, CAD ZONE C04, DAPE DISTRICT, FCT ABUJA (1).pdf"
  },
  {
    year: "2022",
    image:
      "works/2022/FEDERAL INSTITUTE OF INDUSTRIAL RESEARCH financial bid 2022.png",
    altToImage: "Project work",
    hoverText: "Project 2",
    linkToFile:
      "works/2022/FEDERAL INSTITUTE OF INDUSTRIAL RESEARCH financial bid 2022.pdf"
  },
  {
    year: "2023",
    image: "works/2023/EKITI MOSQUE.png",
    altToImage: "Project work",
    hoverText: "Project 1",
    linkToFile: "works/2023/EKITI MOSQUE.pdf"
  },
  {
    year: "2023",
    image: "works/2023/Kaduna Plot 8 Angwa Rimi GRA 4Structural.jpg",
    altToImage: "Project work",
    hoverText: "Project 2",
    linkToFile: "works/2023/Kaduna Plot 8 Angwa Rimi GRA 4Structural.pdf"
  },
  {
    year: "2023",
    image: "works/2023/TYPE 1,2,3,4&5 CONSTRUCTION 14-11-2023.png",
    altToImage: "Project work",
    hoverText: "Project 3",
    linkToFile: "works/2023/TYPE 1,2,3,4&5 CONSTRUCTION 14-11-2023.pdf"
  },
  {
    year: "2024",
    image: "works/2024/ARCHITECTURAL DRAWING PETROL SERVICE STATION.png",
    altToImage: "Project work",
    hoverText: "Project 1",
    linkToFile: "works/2024/ARCHITECTURAL DRAWING PETROL SERVICE STATION.pdf"
  },
  {
    year: "2024",
    image: "works/2024/KAURA 332 STRUCT 2024.png",
    altToImage: "Project work",
    hoverText: "Project 2",
    linkToFile: "works/2024/KAURA 332 STRUCT 2024.pdf"
  },
  {
    year: "2024",
    image: "works/2024/Print _V O N_LUGBE CAD E29_Arch Drwg.png",
    altToImage: "Project work",
    hoverText: "Project 3",
    linkToFile: "works/2024/Print _V O N_LUGBE CAD E29_Arch Drwg.pdf"
  },
  {
    year: "2024",
    image: "works/2024/Wuse II Plot 1075 Arch Drwg.png",
    altToImage: "Project work",
    hoverText: "Project 4",
    linkToFile: "works/2024/Wuse II Plot 1075 Arch Drwg.pdf"
  },
  {
    year: "Civil works",
    image: "works/civil works/01- FOUND & PILE CAP-new.png",
    altToImage: "Project work",
    hoverText: "Project 1",
    linkToFile: "works/civil works/01- FOUND & PILE CAP-new.pdf"
  },
  {
    year: "Civil works",
    image: "works/civil works/Lokogoma Estate Roads  Design23_01_2019 (3).png",
    altToImage: "Project work",
    hoverText: "Project 1",
    linkToFile:
      "works/civil works/Lokogoma Estate Roads  Design23_01_2019 (3).pdf"
  }
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
            <p class="position-absolute fs-3">
              <a href="${index.linkToFile}" target="_blank">Preview</a>
            </p>
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
            <p class="position-absolute fs-3">
              <a href="${index.linkToFile}" target="_blank">Preview</a>
            </p>
          </div>`;

    worksContent += content;
  });

  jsWorks.innerHTML = worksContent;
}
