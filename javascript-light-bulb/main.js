var bodyVar = document.querySelector('body');

function lightBulb(event) {

  var colors = ['111111', '#FEF9F1'];
  for (var i = 0; i < colors.length; i++) {
    bodyVar.style.backgroundColor = colors[i];
  }
}
var click = document.querySelector('.button');

click.addEventListener('click', lightBulb);
