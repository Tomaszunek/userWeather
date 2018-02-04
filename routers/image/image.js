'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getAllImages',function(req, res){
  models.Image.findAll().then((allImages) => {
    if(allImages){
      res.send(allImages);
    }
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
