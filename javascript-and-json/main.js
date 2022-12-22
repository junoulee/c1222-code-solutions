var Array = [
  {
    isbn: '978-3-16-148410-0',
    title: 'Goosebumps',
    author: 'RL Stine'
  },
  {
    isbn: '978-3-16-148410-0',
    title: 'Animorphs',
    author: 'Some Guy'
  },
  {
    isbn: '978-3-16-148410-0',
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  }

];

console.log('Array values', Array);
JSON.stringify(Array);
var jsonString = '{"idnumber":123456, "name":"bart"}';
console.log(jsonString);
console.log(JSON.parse(jsonString));
