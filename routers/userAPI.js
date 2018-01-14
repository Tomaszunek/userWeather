'use strict';

const express = require('express');
const models = require('../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getUsers',function(req, res){
  models.User.findAll().then((users) => {
    res.send(users);
  }).catch(function(err){
    res.send(err);
  });
});

router.get('/getUser/:id',function(req, res){
  models.User.findOne({where: {id : req.params.id}}).then((user) => {
    res.send(user);
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/createUser',function(req, res){
  let user = {
    username : req.body.username,
  }
  models.User.create(user).then((user) => {
    res.send(user);
  }).catch(function(err){
    res.send(err);
  });
});

router.put('/updateUser/:id',function(req, res){
  let user = {
    username : req.body.username,
  }
  models.User.update({user, where : {id : req.params.id}}).then((user) => {
    res.send(user);
  }).catch(function(err){
    res.send(err);
  });
});

router.put('/delete/:id',function(req, res){
  models.User.destroy({where : {id : req.params.id}}).then(() => {
    res.send();
  }).catch(function(err){
    res.send(err);
  });
});




module.exports = router;
