const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};

app.get('/data', cors(), (req, res) => {
  fs.readFile(__dirname + '/data/install_history.json', 'utf8',
    (err, contents) => {
    res.send(JSON.parse(contents));
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
