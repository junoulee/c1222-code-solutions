function getData(event) {
  console.log('submit');

  event.preventDefault();
  var one = xx.elements.name.value;
  var two = xx.elements.email.value;
  var three = xx.elements.message.value;
  var object = { name: one, email: two, message: three };

  console.log(object);
  xx.reset();
}

var xx = document.querySelector('#contact-form');
xx.addEventListener('submit', getData);
