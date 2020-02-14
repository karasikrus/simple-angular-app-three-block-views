const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/data', (req, res) => {
  fs.readFile(__dirname + '/data/install_history.json', 'utf8',
    (err, contents) => {
    res.send(JSON.parse(contents));
  });
});
app.post('/save', (req, res) => {
  fs.writeFile(__dirname + '/data/install_history_modified.json', JSON.stringify(req.body), () => {
    res.send('Data has been saved');
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
