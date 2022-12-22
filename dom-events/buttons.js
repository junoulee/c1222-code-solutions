function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var x = document.querySelector('.click-button');

x.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var y = document.querySelector('.hover-button');

y.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var z = document.querySelector('.double-click-button');

z.addEventListener('dblclick', handleDoubleClick, false);
