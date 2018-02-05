'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sessions = require('client-sessions');

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

router.post('/registerUser',function(req, res){
  var salt = bcrypt.genSaltSync(10);
   var hash = bcrypt.hashSync(req.body.password, salt);
   var userHashed = {
      username  : req.body.username,
      email     : req.body.email,
      phone     : req.body.phone,
      password  : hash,
      locationId : req.body.locationId
  };
  models.User.find({where: {[Sequelize.Op.or] : [{'username' : req.body.username}, {'email' : req.body.email}]}}).then((user) => {
    if(user){
      res.send("This user exists");
    } else {
      models.User.create(userHashed).then(() =>{
        res.sendStatus(200);
      });
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/loginUser',function(req, res){
  models.User.find({where: {[Sequelize.Op.or] : [{'username' : req.body.username}, {'email' : req.body.username}]}}).then((user) => {
    if(!user){
      res.send("User doasnt exists");
    } else {
      if(bcrypt.compareSync(req.body.password, user.password)) {
        req.session.username = user.username;
        if(user.activeAcc === true && user.last_login == null) {
          res.send("firstLogin");
        } else if(user.last_login !== null){
          res.send("nextLogin");
        } else {
          res.send("isUnactive");
        }
      }
    }
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
