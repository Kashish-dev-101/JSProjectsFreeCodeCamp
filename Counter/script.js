"use-strict";

const btns = document.querySelectorAll(".btn");
console.log(btns);

const value = document.querySelector("#value");
console.log(value);

let count = 0;

// btns is a node list so we can use for...of loop to iterate over it
for (let btn of btns) {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList; // return the class list on the element e.currentTarget returns the element on which the event listner is attached
    console.log(styles);
    if (styles.contains("decrease")) {
      count--; //.contains checks if the class is present on the element or not
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green"; // to add a style to an element use element.style.property = "value"
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
}
