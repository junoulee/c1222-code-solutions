const fs = require('fs');
const data = Math.random().toString() + '\n';
fs.writeFile('./random.txt', data, err => {
  if (err) throw err;
  else {

    return data;
  }
});
