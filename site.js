// site.js
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("opt-in-button");
  const newsletterSection = document.getElementById("newsletter");

  button.addEventListener("click", () => {
    newsletterSection.classList.remove("hidden");
    button.style.display = "none";
  });
});
