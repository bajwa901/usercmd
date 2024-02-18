const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const app = express();
const port =  3000;

// Sample route to fetch data from the database
app.get('/data', (req, res) => {
  const db = knex(knexConfig.development);
  db.select('*').from('tbl_users').then((results) => {
    var response = [];
      response.push({'responseCode' : 1, 'message' : 'User Data', 'data': results});
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(response));
  })
  .catch(err => {
    res.status(400).send(err);
  })
  .finally(() => {
    db.destroy();
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
