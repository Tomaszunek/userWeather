'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const url = require('url');
const http = require('http');
const psycheanswer = require('./routers/psyche/answer.js');
const psychequestion = require('./routers/psyche/question.js');
const psychequestionscore = require('./routers/psyche/questionScore.js');
const psycherelationconnection = require('./routers/psyche/relationConnection.js');
const psychename = require('./routers/psyche/testName.js');
const psychescore = require('./routers/psyche/testScore.js');
const psychetype = require('./routers/psyche/type.js');
const psychetypedesc = require('./routers/psyche/typeDesc.js');
const psycheuseranswer = require('./routers/psyche/userAnswer.js');
const psycheresult = require('./routers/psyche/userResult.js');
const testResults = require('./routers/psyche/testResult.js');

//Models
var models = require('./models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const router = express.Router();

app.use('/psyche/answer', psycheanswer);
app.use('/psyche/question', psychequestion);
app.use('/psyche/question-score', psychequestionscore);
app.use('/psyche/relation-connection', psycherelationconnection);
app.use('/psyche/test-name', psychename);
app.use('/psyche/test-score', psychescore);
app.use('/psyche/type', psychetype);
app.use('/psyche/type-desc', psychetypedesc);
app.use('/psyche/user-answer', psycheuseranswer);
app.use('/psyche/user-result', psycheresult);

//Sync Database {force:true}
models.sequelize.sync().then(function(){
  console.log('Nice! Database looks fine');
}).catch(function(err){
  console.log(err,"Something went wrong with the Database Update!");
});

app.listen(3000);
