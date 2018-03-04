'use strict';

const express = require('express');
const userService = require('./userService');
const router = express.Router();


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

router.get('/getUser/:id',function(req, res){
  userService.getById(req.params.id)
       .then(function (user) {
           if (user) {
               res.send(user);
           } else {
               res.status(400).send('Id dont exists');
           }
       })
       .catch(function (err) {
           res.status(400).send(err);
       });
});

router.post('/createUser',function(req, res){
  userService.create(req.body)
       .then(function () {
           res.json('success');
       })
       .catch(function (err) {
           res.status(400).send(err);
       });
});

router.post('/upradeUser/:id',function(req, res){
  userService.update(req.body, req.params.id)
       .then(function () {
           res.json('success');
       })
       .catch(function (err) {
           res.status(400).send(err);
       });
});

router.delete('/deleteUser/:id',function(req, res){
  userService._delete(req.params.id)
       .then(function () {
           res.json('success');
       })
       .catch(function (err) {
           res.status(400).send(err);
       });
});






module.exports = router;
