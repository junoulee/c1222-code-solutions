const fs = require('fs');

function remove(data) {
  delete data.notes[process.argv[3]];
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8',
    (data, err) => {
      if (err) throw err;

    });

}
module.exports = remove;
