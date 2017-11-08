'use strict';

var chai = require('chai'),
    chaihttp = require('chai-http'),
    app = require('../../../app.js'),
    should = chai.should();

chai.use(chaihttp);

describe('patient getById test', function() {
    this.timeout(15000);

    it('no query params', function(done) {
        chai.request(app).get('/patient/getById').end(function(err, res) {
            res.should.has.status(404);
            res.text.should.equal('Can not find id in query parameters!');
            done();
        });
    });

     it('find succesfull', function(done) {
         chai.request(app).get('/patient/getById?id=1').end(function(err, res) {
             res.should.has.status(200);
             done();
         });
     });
});