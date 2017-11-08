'use strict';

var chai = require('chai'),
    chaihttp = require('chai-http'),
    app = require('../../../app.js'),
    should = chai.should(),
    expect = chai.expect,
    patient = require('../../../app/controllers/patient');

chai.use(chaihttp);

describe('patient getById test', function() {
    this.timeout(15000);

    it('no query params', function() {
        chai.request(app).get('/patient/getById').end(function(err, res) {
            res.should.has.status(404);
            res.text.should.equal('Can not find id in query parameters!');
            done();
        });
    });

    it('find succesfull', function() {
        chai.request(app).get('/patient/getById?id=1').end(function(err, res) {
            res.should.has.status(200);
            res.body.id.should.equal(1);
            done();
        });
    });

    it('adding patient success', function() {
        chai.request(app).post('/patient/addPatient?name=Patient2&surname=Patient2&age=99').end(function(err, res) {
            res.should.has.status(200);
            res.text.should.equal('Patient created!');
            done();
        });
    });
});