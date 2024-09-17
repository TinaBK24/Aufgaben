//* für tag */
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

//* für id */
//const body = document.querySelector("#body");
//const h1 = document.querySelector("#h1");

//* für class */
//const body = document.querySelector(".body");
//const h1 = document.querySelector(".h1");

function myFunction(bg_color, text_color) {
    body.style.backgroundColor = bg_color;
    h1.style.color = text_color;
}