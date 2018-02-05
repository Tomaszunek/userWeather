//'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const url = require('url');
const http = require('http');

const commBlockProfile = require('./routers/communication/blockProfile.js');
const commFavoriteProfile = require('./routers/communication/favoriteProfile.js');
const commFlirt = require('./routers/communication/flirt.js');
const commGift = require('./routers/communication/gift.js');
const commMessage = require('./routers/communication/message.js');
const commProvocation = require('./routers/communication/provocation.js');
const commWatchedProfile = require('./routers/communication/watchedProfile.js');

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

const event = require('./routers/event/event.js');
const faq = require('./routers/faq/faq.js');
const image = require('./routers/image/image.js');
const locations = require('./routers/location/location.js');
const mailing = require('./routers/mailing/mailing.js');
const news = require('./routers/news/news.js');
const notification = require('./routers/notification/notification.js');
const payments = require('./routers/payments/payments.js');
const search = require('./routers/search/search.js');
const stats = require('./routers/stats/stats.js');
const user = require('./routers/user/user.js');

//Models
var models = require('./models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const router = express.Router();

app.use('/comm/block-profile', commBlockProfile);
app.use('/comm/favorite-profile', commFavoriteProfile);
app.use('/comm/flirt', commFlirt);
app.use('/comm/gift', commGift);
app.use('/comm/message', commMessage);
app.use('/comm/provoc', commProvocation);
app.use('/comm/watched-profile', commWatchedProfile);

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
app.use('/psyche/test-result', testResults);

app.use('/event', events);
app.use('/faq', faq);
app.use('/image', image);
app.use('/locations', locations);
app.use('/mailing', mailing);
app.use('/news', news);
app.use('/notification', notification);
app.use('/payments', payments);
app.use('/search', search);
app.use('/stats', stats);
app.use('/user', user);

//Sync Database {force:true}
models.sequelize.sync().then(function(){
  console.log('Nice! Database looks fine');
}).catch(function(err){
  console.log(err,"Something went wrong with the Database Update!");
});

app.listen(3000);
