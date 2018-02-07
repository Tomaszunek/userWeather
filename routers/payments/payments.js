'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getAllPayments',function(req, res){
  models.Payment.findAll().then((payment) => {
    if(payment){
      res.send(payment);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
