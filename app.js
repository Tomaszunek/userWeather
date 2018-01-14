'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const url = require('url');
const http = require('http');

//Models
var models = require('./models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const router = express.Router();

//Sync Database {force:true}
models.sequelize.sync({force:true}).then(function(){
  console.log('Nice! Database looks fine');
}).catch(function(err){
  console.log(err,"Something went wrong with the Database Update!");
});

app.listen(3000);
