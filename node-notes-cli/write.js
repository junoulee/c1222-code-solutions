const fs = require('fs');
const note = process.argv[3];

function write(data) {
  data.notes[data.nextId] = note;
  data.nextId++;
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8',
    (data, err) => {
      if (err) throw err;

    });

}
module.exports = write;
