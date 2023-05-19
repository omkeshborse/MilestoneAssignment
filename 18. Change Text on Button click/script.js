// 18. Change Text on Button click.
// Create a simple HTML page with a heading and a button. The initial text must be “The most affordable learning
// platform”, use JavaScript to change the heading text to “PW Skills” when the button is clicked. The button must
// toggle the text of a heading between "The most affordable learning platform" and "PW Skills" on each click.

const heading = document.querySelector("#toggleHeading");
const button = document.querySelector("#toogleBtn");

button.addEventListener("click", changetext)
function changetext() {
  if ((heading.innerHTML == "The most affordable learning platform")) {
    heading.innerHTML = "PW Skills" ;
  }else {
    heading.innerHTML = "The most affordable learning platform" ;
  }
}
