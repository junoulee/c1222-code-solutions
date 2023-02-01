const takeAChance = require('./take-a-chance');

const promise = takeAChance('Junou');

promise.then((message) => {
  console.log(message);
});

promise.catch((error) => {
  console.error(error.message);
});
