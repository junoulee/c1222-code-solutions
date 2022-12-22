// set counter variable to 0;
// create variables to target hot-button and click-count;
// define a function(click) to use in the eventlistener
// concatenate 'clicks' + counter variable incremented to update .click-count;
// set addeventlistener using callback (click);
// make if statements that correlate to directions and update class names using x.className;
var counter = 0;

var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function click(event) {

  clickCount.textContent = 'Clicks: ' + counter++;
  if (counter < 4) {
    hotButton.className = 'hot-button cold';
  } if (counter > 4 && counter < 7) {
    hotButton.className = 'hot-button cool';
  } if (counter > 7 && counter < 13) {
    hotButton.className = 'hot-button tepid';
  } if (counter > 13 && counter < 16) {
    hotButton.className = 'hot-button warm';
  } if (counter > 16) {
    hotButton.className = 'hot-button nuclear';
  }

}

hotButton.addEventListener('click', click, false);
