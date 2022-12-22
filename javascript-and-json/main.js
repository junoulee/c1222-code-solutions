var arrayOne = [
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

console.log('Array values', arrayOne);
var arrayVar = JSON.stringify(Array);
console.log('array', arrayVar);
console.log('type of array', typeof arrayVar);
var string = '{"idnumber":123456, "name":"bart"}';
console.log('string:', string);
var bart = JSON.parse(string);
console.log('bart', bart);
console.log('typeof bart', typeof bart);
