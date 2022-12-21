function getData(event) {
  console.log('submit');

  event.preventDefault();
  var nameValue = contactForm.elements.name.value;
  var emailValue = contactForm.elements.email.value;
  var messageValue = contactForm.elements.message.value;
  var object = { name: nameValue, email: emailValue, message: messageValue };

  console.log(object);
  contactForm.reset();
}

var contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', getData);
