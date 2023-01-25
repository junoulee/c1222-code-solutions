const fs = require('fs');
const data = process.argv[2];
fs.writeFile('./note.txt', data, { encoding: 'utf8' },
  err => {
    if (err) throw err;
    else {

      return data;
    }
  });
