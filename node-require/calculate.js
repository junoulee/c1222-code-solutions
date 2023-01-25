if (process.argv[3] === 'plus') {
  const add = require('./add');
  console.log('result:', add);
}
if (process.argv[3] === 'minus') {
  const subtract = require('./subtract');
  console.log('result:', subtract);
}
if (process.argv[3] === 'times') {
  const multiply = require('./multiply');
  console.log('result:', multiply);
}

if (process.argv[3] === 'over') {
  const divide = require('./divide');
  console.log('result:', divide);
}

if (process.argv[3] !== 'plus' || process.argv[3] !== 'minus' || process.argv[3] !== 'times' || process.argv[3] !== 'over') {
  console.log('invalid operation');
}
