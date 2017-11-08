var express = require('express'),
router = express.Router(),
db = require('../models');

module.exports = function (app) {
app.use('/patient', router);
};

router.get('/getById', function (req, res, next) {
    if(req.query.id) {
        db.patient.findOne( {where : { id: req.query.id }}).then(function(patient) {
            if(patient)
                res.status(200).send(patient);
            else
                res.status(404).send('Can not find patient!!!!!');
        });
    }
    else
        res.status(404).send('Can not find id in query parameters!');
    db.Article.findAll().then(function (articles) {
    });
});

router.post('/addPatient', function (req, res, next) {
    if(req.query.name && req.query.surname && req.query.age) {
        db.patient.create({
            name : req.query.name,
            surname : req.query.surname,
            age : req.query.age
        });

        res.status(200).send('Patient created!');
    }
    else
        res.status(404).send('Can not find name|surname|age in query parameters!');
});