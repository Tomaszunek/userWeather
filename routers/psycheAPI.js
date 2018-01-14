const express = require('express');
const models = require('../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getPsyche',function(req, res){
  models.PsycheTestName.findAll().then((psychTest) => {
    console.log(psychTest);
  })
});

module.exports = router;
