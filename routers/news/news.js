'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getAllNews',function(req, res){
  models.FaqQuestion.findAll().then((news) => {
    if(news){
      res.send(news);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
