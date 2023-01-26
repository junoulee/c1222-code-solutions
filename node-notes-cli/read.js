function read(data) {
  const notes = [];
  for (const key in data.notes) {
    notes.push(`${key}: ${data.notes[key]}`);
  }
  return notes;
}
module.exports = read;
