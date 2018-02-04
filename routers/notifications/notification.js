'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getAllNotifications',function(req, res){
  models.Notifications.findAll().then((notifications) => {
    if(notifications){
      res.send(notifications);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
