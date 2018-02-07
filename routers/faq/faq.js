'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getAllFaqQuestion',function(req, res){
  models.FaqQuestion.findAll().then((faqQuestion) => {
    if(faqQuestion){
      res.send(faqQuestion);
    }
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
