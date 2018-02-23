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
        res.json('success');
      });
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/createDetails/:id',function(req, res){
   var userDetail = {
      firstName  : req.body.firstName,
      lastName   : req.body.lastName,
      gender     : req.body.gender,
      address    : req.body.address,
      birthDay   : req.body.address,
  };
  models.UserDetail.find({where: {userId : req.params.id}}).then((user) => {
    if(user){
      res.send("Details for that user just exists");
    } else {
      models.UserDetail.create(userDetail).then(() =>{
        res.sendStatus(200);
      });
    }
  }).catch(function(err){
    res.send(err);
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



router.post('/loginUser',function(req, res){
  userService.authenticate(req.body.username, req.body.password)
       .then(function (user) {
           if (user) {
               // authentication successful
               res.send(user);
           } else {
               // authentication failed
               res.status(400).send('Username or password is incorrect');
           }
       })
       .catch(function (err) {
           res.status(400).send(err);
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
