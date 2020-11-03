const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('hello world');

  const advice = axios.get();


  res.send('hello world');
  res.end();
});

app.listen(port, err => {
  if(err) console.log('error occurred');
  else console.log('app listening on port: ' + port);
});

