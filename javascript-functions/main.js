function convertMinutesToSeconds(minutes) {
  var seconds = 60 * minutes;
  return seconds;
}

var howManySeconds = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds result:', howManySeconds);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResults = greet('Butthead');
console.log('greet results:', greetResults);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var whatArea = getArea(5, 7);
console.log('getArea results:', whatArea);

function getFirstName(person) {
  var who = person.firstName;
  return who;
}

var person = { firstName: 'Homer', lastName: 'Simpson' };
var answer = getFirstName(person);
console.log('getFirstName results:', answer);

function getLastElement(array) {
  var what = array[array.length - 1];
  return what;
}

var array = ['dog', 'cat', 'horse'];
var lastOne = getLastElement(array);
console.log('getLastElement results:', lastOne);
