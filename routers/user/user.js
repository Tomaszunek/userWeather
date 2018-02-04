'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getUsers',function(req, res){
  models.User.findAll().then((user) => {
    if(user){
      res.send(user);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
