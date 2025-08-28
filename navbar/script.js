"use-strict";

const links = document.querySelector(".links");
console.log(links);

const btnNavToggle = document.querySelector(".nav-toggle");
console.log(btnNavToggle);

btnNavToggle.addEventListener("click", () => {
  console.log("button was clicked");
  console.log(links.classList);
  console.log(links.classList.contains("links"));
  links.classList.toggle("show-links"); // toggle is used to toggle the class also useful when doning light and dark mode
  console.log(links.classList.contains("show-links"));
});
