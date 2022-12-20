function getData(event) {
  console.log('submit');

  event.preventDefault();
  var one = xx.elements.name.value;
  var two = xx.elements.name.value;
  var three = xx.elements.name.value;
  var object = { name: one, email: two, message: three };

  console.log(object);
  xx.reset();
}

var xx = document.querySelector('#contact-form');
xx.addEventListener('submit', getData);
