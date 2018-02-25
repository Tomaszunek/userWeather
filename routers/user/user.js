'use strict';

const express = require('express');
const userService = require('./userService');
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

router.get('/getUser/:id',function(req, res){
  models.User.findAll({where: {'id' : req.params.id},
    include : { model: models.UserDetail, as : 'UserDetail'
  }}).then((user) => {
    if(user){
      res.send(user);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/registerUser',function(req, res){
  userService.create(req.body)
       .then(function () {
           res.json('success');
       })
       .catch(function (err) {
           res.status(400).send(err);
       });
});

router.post('/loginUser',function(req, res){
  userService.authenticate(req.body.username, req.body.password)
       .then(function (user) {
           if (user && (user.activeAcc == 0)) {
             res.status(500).send('Active your account via mail');
           } else if(user && (user.last_login == null)){
             user.message = 'firstLogin';
             res.send(user);
           } else if(!user){
             res.status(500).send("User doesn't exists");
           } else {
             userService.updateLoginTime(user.id);
             res.send(user);
           }
       })
       .catch(function (err) {
           res.status(400).send(err);
       });
});

router.post('/createDetails',function(req, res){
  userService.createDetails(req.body)
       .then(function () {
           res.json('success');
       })
       .catch(function (err) {
           res.status(400).send(err);
       });
});

router.get('/activeAccount/:username',function(req, res){
  userService.activeAccount(req.params.username)
       .then(function () {
           res.redirect('/');
       })
       .catch(function (err) {
           res.status(400).send(err);
       });
});

router.get('/acceptMail/:username',function(req, res){
  models.User.find({where: {username : req.params.username}}).then((user) => {
    if(user){
      models.User.update({'activeAcc' : true},{where : {username : req.params.username}}).then((user) => {
        res.sendStatus(200);
      });
    }
  });
});





router.get('/users',function(req, res){
  userService.getAll()
       .then(function (users) {
           if (users) {
               res.send(users);
           } else {
               res.status(400).send('Username dont exists');
           }
       })
       .catch(function (err) {
           res.status(400).send(err);
       });
});


module.exports = router;
