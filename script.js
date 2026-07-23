const projects = [
  {
    image:url("9723510-waterfront-luxury-villa-in-turks-.jpg"),
    title: "Luxury Villa",
    desc: "Modern luxury villa with premium design and construction."
  },
  {
    image:url("4952584.jpg"),
    title: "Commercial Building",
    desc: "Beautiful modern commercial spaces built for efficiency, innovation, and success."
  },
  {
    image:url("3671451.jpg"),
    title: "Bridge",
    desc: "A modern bridge designed for strength, safety, and long-term reliability."
  },
];

let current = 0;

const projectImage = document.getElementById("projectImage");
const projectTitle = document.getElementById("projectTitle");
const projectDesc = document.getElementById("projectDesc");

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % projects.length;
  updateProject();
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + projects.length) % projects.length;
  updateProject();
});

function updateProject() {
  projectImage.src = projects[current].image;
  projectTitle.textContent = projects[current].title;
  projectDesc.textContent = projects[current].desc;
}
