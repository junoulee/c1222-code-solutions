// set variables for body & buttom element
// make function to go inside event listener
// make event listener listen for click
// need to make the background & button change colors whhen clicked.
var isOn = true;

var click = document.querySelector('.button');

var bodyVar = document.querySelector('body');

function lightBulb(event) {

  if (isOn === true) {
    isOn = false;
    click.className = 'button-clicked';
    bodyVar.className = 'body-black';

  } else if (isOn === false) {
    isOn = true;
    click.className = 'button';
    bodyVar.className = 'bodytag';

  }
}

click.addEventListener('click', lightBulb);
