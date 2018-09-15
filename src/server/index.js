const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

app.get(['/cart/:cartId'], function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));
