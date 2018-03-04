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

router.get('/coutries',function(req, res){
  userService.getCountries()
       .then(function (countries) {
           if (countries) {
               res.send(countries);
           } else {
               res.status(400).send('Countries dont exists');
           }
       })
       .catch(function (err) {
           res.status(400).send(err);
       });
});

router.get('/stetes',function(req, res){
  userService.getStates()
       .then(function (states) {
           if (states) {
               res.send(states);
           } else {
               res.status(400).send('States dont exists');
           }
       })
       .catch(function (err) {
           res.status(400).send(err);
       });
});


router.get('/cities',function(req, res){
  userService.getCities()
       .then(function (cities) {
           if (cities) {
               res.send(cities);
           } else {
               res.status(400).send('Cities dont exists');
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

router.post('/updateUser/:id',function(req, res){
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
