// set counter variable to 0;
// create variables to target hot-button and click-count;
// define a function(click) to use in the eventlistener
// concatenate 'clicks' + counter variable incremented to update .click-count;
// set addeventlistener using callback (click);
// make if statements that correlate to directions and update class names using x.className;
var counter = 0;

var x = document.querySelector('.hot-button');
var y = document.querySelector('.click-count');

function click(event) {

  y.textContent = 'Clicks: ' + counter++;
  if (counter < 4) {
    x.className = 'hot-button cold';
  } if (counter > 4 && counter < 7) {
    x.className = 'hot-button cool';
  } if (counter > 7 && counter < 13) {
    x.className = 'hot-button tepid';
  } if (counter > 13 && counter < 16) {
    x.className = 'hot-button warm';
  } if (counter > 16) {
    x.className = 'hot-button nuclear';
  }

}

x.addEventListener('click', click, false);
