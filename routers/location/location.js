'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getAllLocation',function(req, res){
  models.Locations.findAll().then((locations) => {
    if(locations){
      res.send(locations);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
