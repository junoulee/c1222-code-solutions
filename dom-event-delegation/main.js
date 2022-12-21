function clickTask(event) {
  console.log(event.target);
  console.log(event.target.tagName);
}

var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', clickTask);

taskList.addEventListener('click', function (event) {
  var targetButton = document.querySelector('button');
  if (event.target === targetButton || event.target.nodeName === 'BUTTON') {
    var closestItem = targetButton.closest('.task-list-item');
  }
  console.log('closest item:', closestItem);

}

);
document.remove('.task-list.item');
