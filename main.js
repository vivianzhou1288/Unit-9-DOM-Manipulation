//The Document Object Model, or DOM, is essentially the elements you write into your HTML. DOMSelectors allow you to easily access your HTML in JS.

// // DOMSelectors are objects that hold access to the DOM that you can call upon easily at any point in your code.

const DOMSelectors = {
  button: document.getElementById("btn"), // getElementById looks for the id that is passed through it, in this case being "btn"
  text: document.querySelector("#text"), // queryselectors look for elements based on parameters, being '.' or '#'
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"), // querySelectorAll will access multiple elements with the same class, in this case being "point"
  pointTwo: document.getElementById("pointTwo"),
  null: document.getElementById("point"), // if you try to access a class with getElementById, it will result in "null"
  empty: document.querySelector(".nothing"),
};

/* console.log(DOMSelectors.box);
console.log(DOMSelectors.button);
console.log(DOMSelectors.text);
console.log(DOMSelectors.points);
console.log;
console.log(DOMSelectors.points[0]); // this returns the first ever element in the document with class 'point'
console.log(DOMSelectors.null);
console.log(DOMSelectors.pointTwo);
console.log(DOMSelectors.nothing); */
// when you look in the console after logging DOMSelectors, you will be able to see the elements that the DOMSelector accesses.
// if you have a DOMSelector for an element that doesn't exist, it will show up as undefined.
/* const button = document.getElementById("btn");
const text = document.querySelector("#text");
console.log(text); */
function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "This is now a big bigger red box";
  text.style.fontSize = "40px";
}
backgroundAndText(DOMSelectors.box, DOMSelectors.text);
