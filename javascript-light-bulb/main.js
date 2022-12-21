// set variables for body & buttom element
// make function to go inside event listener
// make event listener listen for click
// need to make the background & button change colors whhen clicked.
var counter = 0;

var click = document.querySelector('.button');
var clickCount = document.querySelector('.click count');

document.querySelector('body');

function lightBulb(event) {
  clickCount.className.style.backgroundColor = 'black';
  return counter;

}

click.addEventListener('click', lightBulb);
