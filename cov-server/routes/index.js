var express = require('express');
var router = express.Router();
const Entry = require('../models/entrymodel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nepal-Helps' });
});
/* INSERT ENTRY */
router.post('/get', async function(req, res, next) {
  const entry = await Entry.create({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    address : req.body.address,
    requestfor : req.body.requestfor,
    urgency : req.body.urgency,
    gender : req.body.gender,
    email : req.body.email,
    mobilenumber : req.body.mobilenumber
  });
  res.render('success', { title: 'COVID-X' , entry : entry });
});
/* SHOW ENTRIES */
router.get('/entries', async function(req, res, next) {
  const entries = await Entry.find().sort({createdAt: -1});
  res.render('entries', { title: 'COVID-X' , entries : entries });
});
router.get('/allentries', async function(req, res, next) {
  const entries = await Entry.find().sort({createdAt: -1});
  res.send(JSON.stringify(entries));
});
module.exports = router;
