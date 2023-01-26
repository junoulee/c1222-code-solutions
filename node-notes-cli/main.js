const json = require('./data.json');
const read = require('./read.js');
const write = require('./write.js');
const remove = require('./delete.js');
const update = require('./update.js');

const entry = process.argv[2];

if (entry === 'read') {
  const notes = read(json);
  for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
  }
}

if (entry === 'create') {
  write(json);
}

if (entry === 'delete') {
  remove(json);
}

if (entry === 'update') {
  update(json);
}
