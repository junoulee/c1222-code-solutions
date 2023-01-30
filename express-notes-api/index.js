const express = require('express');
const jsonData = require('./data.json');
const app = express();
const fs = require('fs');
app.use(express.json());

const errors = [
  {
    error: 'id must be a positive integer',
  },
  {
    error: 'content is a required field',
  },
  {
    error: 'An unexpected error occurred.',
  },
];

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const key in jsonData.notes) {
    dataArray.push(jsonData.notes[key]);
  }
  res.json(dataArray);
});

app.get('/api/notes/:id', (req, res) => {
  const dataArray = [];
  const getId = Number(req.params.id);
  for (const key in jsonData.notes) {
    dataArray.push(jsonData.notes[key]);
  }
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].id === getId) {
      return res.status(200).json(dataArray[i]);
    }
  }
  if (getId < 1) {
    res.status(400).json(errors[0]);
  } else {
    res.status(404).send(`{ "error": "cannot find note with id ${getId}"}`);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    return res.status(400).send(errors[1]);
  }
  const postId = jsonData.nextId;
  req.body.id = postId;
  const newEntry = req.body;
  jsonData.notes[postId] = newEntry;
  jsonData.nextId++;
  fs.writeFile('./data.json', JSON.stringify(jsonData, null, 2), 'utf8',
    (err) => {
      if (!err) {
        res.status(201).send(newEntry);
      } else {
        console.error(err);
        res.status(500).send(errors[2]);
      }
    });
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = req.params.id;
  if (deleteId < 1) {
    return res.status(400).json(errors[0]);
  }
  if (!jsonData.notes[deleteId]) {
    return res.status(404).send(`{ "error": "cannot find note with id ${deleteId}"}`);
  }
  delete jsonData.notes[deleteId];
  fs.writeFile('./data.json', JSON.stringify(jsonData, null, 2), 'utf8',
    (err) => {
      if (!err) {
        res.sendStatus(204);
      } else {
        console.error(err);
        res.status(500).send(errors[2]);
      }
    });
});

app.put('/api/notes/:id', (req, res) => {
  const putId = req.params.id;
  if (putId < 1) {
    return res.status(400).json(errors[0]);
  }
  if (!req.body.content) {
    return res.status(400).send(errors[1]);
  }
  if (!jsonData.notes[putId]) {
    return res.status(404).send(`{ "error": "cannot find note with id ${putId}"}`);
  }
  req.body.id = Number(putId);
  const updatedNote = req.body;
  jsonData.notes[putId] = updatedNote;
  fs.writeFile('./data.json', JSON.stringify(jsonData, null, 2), 'utf8',
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send(errors[2]);
      } else {
        res.status(200).json(updatedNote);
      }
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
