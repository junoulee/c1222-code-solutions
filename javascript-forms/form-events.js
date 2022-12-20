function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name', event.target.name);
  console.log('event.target.value', event.target.value);
}

var x = document.querySelector('#user-name');
var y = document.querySelector('#user-email');
var z = document.querySelector('user-message');

x.addEventListener('focus', handleFocus);
x.addEventListener('blur', handleBlur);
x.addEventListener('input', handleInput);

y.addEventListener('focus', handleFocus);
y.addEventListener('blur', handleBlur);
y.addEventListener('input', handleInput);

z.addEventListener('focus', handleFocus);
z.addEventListener('blur', handleBlur);
z.addEventListener('input', handleInput);
