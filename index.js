const express = require('express');
var connection = require('./src/config/database');

const app = express();
const port =  3000;

// Sample route to fetch data from the database
app.get('/data', (req, res) => {
  var query = connection.query('SELECT * from users', function(err, results, fields) {
    if(!err){
      var response = [];
      response.push({'rescode' : 1, 'message' : 'User Data', 'data': results});
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(response));
    }
    else{
      res.status(400).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
