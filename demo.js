// demo.js

const projects = [
  {
    name: "Fluency Flow",
    description:
      "A language-learning platform that adapts to what you already know. Built for maximum flow, clarity, and retention.",
    url: "https://fluencyflow.vercel.app",
    tags: ["language", "education", "webapp"],
  },
  {
    name: "Journelle",
    description:
      "A sleek, sensory journaling and reflection platform for deep inner awareness and effortless emotional release.",
    url: "https://journelle.app",
    tags: ["wellness", "journaling", "ui/ux"],
  },
  // Add more projects here
];

function renderProjects(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const title = document.createElement("h3");
    title.textContent = project.name;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const link = document.createElement("a");
    link.href = project.url;
    link.textContent = "View Project →";
    link.target = "_blank";
    link.classList.add("project-link");

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects("project-showcase");
});
