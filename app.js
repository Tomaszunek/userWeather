//'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const url = require('url');
const http = require('http');
const sessions = require('client-sessions');

const user = require('./routers/user/user.js');

//Models
var models = require('./models');

const app = express();

app.use(sessions({
  cookieName: 'session',
  secret: 'some_secret_words',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  httpOnly:true,
  //secure: true,
  ephemeral: true,
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

const router = express.Router();

app.use('/user', user);

//Sync Database {force:true}
models.sequelize.sync().then(function(){
  console.log('Nice! Database looks fine');
}).catch(function(err){
  console.log(err,"Something went wrong with the Database Update!");
});

app.listen(3000);
