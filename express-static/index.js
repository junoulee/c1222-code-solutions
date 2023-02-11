const express = require('express');
const app = express();
const path = require('node:path');

const pathJoin = path.join(__dirname, 'public');
const middleWare = express.static(pathJoin);
app.use(middleWare);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
