'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getAllGifts',function(req, res){
  models.CommunicationGift.findAll().then((gifts) => {
    if(gifts){
      res.send(gifts);
    }
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
