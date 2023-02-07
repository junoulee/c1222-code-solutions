const fs = require('fs');
const id = process.argv[3];
const value = process.argv[4];

function update(data) {
  data.notes[id] = value;

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8',
    (data, err) => {
      if (err) throw err;

    });

}
module.exports = update;
