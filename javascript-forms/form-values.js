function getData(event) {
  console.log('submit');

  event.preventDefault();
  var one = document.forms[0].elements[0].name.value;
  var two = document.forms[0].elements[1].name.value;
  var three = document.forms[0].elements[2].name.value;
  var object = { name: one, email: two, message: three };

  console.log(object);
  xx.reset();
}

var xx = document.querySelector('#contact-form');
xx.addEventListener('submit', getData);
