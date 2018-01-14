const models = require('../models');
const Sequelize = require('sequelize');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Psyche', () => {
    beforeEach((done) => { //Before each test we empty the database
        models.PsycheTestName.destroy({}, (err) => {
           done();
        });
    });
/*
  * Test the /GET route
  */
  describe('/GET book', () => {
      it('it should GET all the psyche tests', (done) => {
        chai.request(server)
            .get('/getAllPsyche')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});
