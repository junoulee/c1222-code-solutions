var openButton = document.querySelector('.open-button');
var isOn = true;
var whiteBody = document.querySelector('body');
var questionBox = document.querySelector('.question-box');

function triggerButton(event) {
  if (isOn === true) {
    isOn = false;
    whiteBody.className = 'body-clicked';
    questionBox.className = 'question-box-popup';
    openButton.className = 'open-button-clicked';

  } else if (isOn === false) {
    isOn = true;
    whiteBody.className = 'body-default';
    questionBox.className = 'question-box';
    openButton.className = 'open-button';
  }

}

openButton.addEventListener('click', triggerButton);

var popUpNo = document.querySelector('.no-button');

function noSurvey(event) {
  if (isOn === false) {
    whiteBody.className = 'body-default';
    questionBox.className = 'question-box';
    openButton.className = 'open-button';
  }
  isOn = true;
}

popUpNo.addEventListener('click', noSurvey);
