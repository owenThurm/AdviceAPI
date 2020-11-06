const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.get('/', (req, res) => {
  console.log('hello world');
  axios({
    method: 'get',
    url: 'https://api.adviceslip.com/advice',
    responseType: 'JSON'
  }).then(response => {
    console.log(response);
    const advice = response.data.slip.advice;
    const adviceNum = response.data.slip.id;
    console.log(advice);
    console.log('Words of wisdom #' + adviceNum);
    try{
      res.write(advice);
      res.write('\n \n \t -Words of Wisdom #' + adviceNum);
      res.end();
    } catch(error) {
      console.log(error);
    }
  }).catch(err => {
    console.log(err);
  })

});

app.listen(port, err => {
  if(err) console.log('error occurred');
  else console.log('app listening on port: ' + port);
});

