var users = document.querySelector('#user-list');
function getUserList() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (var i = 0; i < xhr.response.length; i++) {
      var bullets = document.createElement('li');
      bullets.textContent = xhr.response[i].name;
      users.appendChild(bullets);
    }
  });
  xhr.send();
}
getUserList();
