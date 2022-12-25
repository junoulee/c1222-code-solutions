// set queryselectors for elements needed
// figure out how to log keystrokes (addeventlistener)
// define a function (var i = 0 outside of function)
// if KeyboardEvent.key === matches subsequent characters of span
// make it turn green (className) and move to the next. if !==, make it turn red
// if key logged is correct, make i++ outside of if statement
// if key logged is incorrect, do i-- inside of 2nd if statement

var characterList = document.querySelectorAll('span');
var lastLetter = document.querySelector('#last-one');

var i = 0;

function l2Type(event) {

  if (event.key === characterList[i].textContent && i >= 0) {
    characterList[i].className = 'span-correct';
    characterList[0].removeAttribute('id');

  }

  if (event.key !== characterList[i].textContent) {
    characterList[i].className = 'span-wrong';

    if (characterList[i] === undefined) {
      characterList[0].className = 'span-wrong';

    } else if (i >= 1) {
      characterList[i - 1].className = 'span-passed';
    }
    i--;
  }
  i++;

  if (i >= 2) {
    characterList[i - 2].className = 'span-passed';

  }
  if (i === characterList.length) {
    lastLetter.className = 'span-passed';
  }

}

window.addEventListener('keydown', l2Type);
