var student = {
  firstName: 'Junou',
  lastName: 'Lee',
  age: '38'
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'manager';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Audi',
  model: 'A3',
  year: '2016'
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Herbert',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
