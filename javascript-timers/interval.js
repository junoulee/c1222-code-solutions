var counter = document.querySelector('.countdown-display');
var nIntervId;

var timeLeft = 4;
var timer = setInterval(function () {
  if (timeLeft <= 0) {
    clearInterval(nIntervId);
    counter.textContent = "'~Earth Beeeelooowww Us~'";
  } else {
    counter.textContent = timeLeft;
  }
  timeLeft = timeLeft - 1;
}, 1000);

setTimeout(timer, 1000);
