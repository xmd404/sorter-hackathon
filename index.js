const user = require('./user');  // Create a user.js file in this directory with your username to test database.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pg = require('pg-promise')();
const dbConfig = 'postgres://' + user + '@localhost:5432/';
const db = pg(dbConfig);

app.use(express.static('public'));

app.listen(3000);

