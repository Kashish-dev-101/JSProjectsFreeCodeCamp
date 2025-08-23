"use-strict";

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
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

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * hex.length);
  console.log(randomNumber);
  return randomNumber;
};

// Event listener to the button
btn.addEventListener("click", () => {
  console.log("Button Clicked");
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
