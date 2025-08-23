"use strict";

const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "blue",
  "yellow",
  "pink",
  "purple",
  "cyan",
  "teal",
  "orange",
  "brown",
  "magenta",
  "lime",
  "indigo",
  "violet",
  "gold",
  "silver",
];

const btn = document.querySelector("#btn");
console.log(btn);

const color = document.querySelector(".color");
console.log(color);

const navLinks = document.querySelectorAll(".nav-links a");
console.log(navLinks);

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    //e.preventDefault(); // prevent page reload on clicking the link
    console.log("Link Clicked");
    const linkText = link.textContent;
    console.log(linkText);
    const current = document.querySelector(".nav-links .active");
    console.log(current);
    if (current) {
      current.classList.remove("active");
      link.classList.add("active");
    }
    link.classList.add("active");
  });
});

// function to get the random number between 0 and array length
const getRandonNumber = () => {
  const randomNumber = Math.floor(Math.random() * colors.length);
  return randomNumber;
};

btn.addEventListener("click", () => {
  // get random number between 0 - 3
  console.log("Button Clicked");
  const randomNumber = getRandonNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
