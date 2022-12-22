var tabContainer = document.querySelector('.tab-container');
var tabNodes = document.querySelectorAll('.tab');
var viewNodes = document.querySelectorAll('.view');

function click(event) {
  // Checks to see if the event.target matches('.tab') to ensure that the
  // user has to actually click on a '.tab' to change the page.
  // If it does match, then... loop (i = 0, i < tabnodes.length, i++) and set
  // className to 'tab active' for tabnodes[i] that matches event.target
  // else statement for tabnodes[i] that don't equal even.target to className 'tab'

  if (event.target.matches('.tab') === true) {
    for (var i = 0; i < tabNodes.length; i++) {
      if (tabNodes[i] === event.target) {
        tabNodes[i].className = 'tab active';
      } else {
        tabNodes[i].className = 'tab';
      }
    }
  }
  // for loop again for viewNodes (same condition as above)
  // must get 'data-view' attribute values from viewNodes nodelist
  // compare viewNodes data-view attribute values (var viewNodesDataView = viewNodes[i].getAttribute('data-view');
  // to dataView
  // all viewNode elements should be className 'hidden' except the one that has a
  // data-view attribute that equals dataView

  var dataView = event.target.getAttribute('data-view');

  for (i = 0; i < viewNodes.length; i++) {
    var viewNodesDataView = viewNodes[i].getAttribute('data-view');
    if (viewNodesDataView !== dataView) {
      viewNodes[i].className = 'hidden';
    } else {
      viewNodes[i].className = 'view';
    }
  }

}
tabContainer.addEventListener('click', click);
