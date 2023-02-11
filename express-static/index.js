const express = require('express');
const app = express();
const path = require('node:path');

const pathJoin = path.join(__dirname, 'public');
console.log(pathJoin);
const middleWare = express.static('public');
app.use(middleWare);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
