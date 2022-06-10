const express = require('express');
const app = express();

const path = require('path');

const root = path.join(__dirname, 'public');
console.log('root', root);

const staticFiles = express.static(root);

app.use(staticFiles);

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
