const takeAChance = require('./take-a-chance');

const promise = takeAChance('Junou');

promise
  .then((message) => {
    console.log(message);
  })

  .catch((error) => {
    console.error(error.message);
  });
