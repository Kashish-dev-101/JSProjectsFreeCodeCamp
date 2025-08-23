"use-strict";

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

const colorsAPI = "https://www.thecolorapi.com/random";

// function to fetch random color from API
// const getColor = async () => {
//   try {
//     const rawresponse = await fetch(colorsAPI);
//     const response = await rawresponse.json();
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

btn.addEventListener("click", async () => {
  console.log("Button Clicked");
  const rawResponse = await fetch(colorsAPI);
  const response = await rawResponse.json();
  console.log(response);
  const randomColor = response.hex.value;
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});
