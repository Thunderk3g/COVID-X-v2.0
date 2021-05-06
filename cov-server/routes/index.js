var express = require('express');
var router = express.Router();
const Entry = require('../models/entrymodel');
const Contribute = require('../models/contributemodel');
const Help = require('../models/offerhelpmodel');
const User = require('../models/offerhelpmodel');
const AdminLogin = require('../models/adminloginmodel');

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
router.post('/postEntry', async function(req, res, next) {
  console.log(req.body);
  const entry = await Entry.create({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    address : req.body.address,
    requestfor : req.body.requestfor,
    urgency : req.body.urgency,
    gender : req.body.gender,
    email : req.body.email,
    mobilenumber : req.body.mobilenumber,
    isVerified:false,
  });
  res.send(JSON.stringify(entry));
});
/*Update Entry*/
router.put('/updateEntry', async function(req, res, next) {
  console.log(req.body);
  const entry = await Entry.findByIdAndUpdate(req.body._id,req.body);
  res.send(JSON.stringify(entry));
});
/* Contribute Now */
router.post('/contribute', async function(req, res, next) {
  const entry = await Contribute.create({
    fullname : req.body.fullname,
    address : req.body.address,
    email : req.body.email,
    interestedfield: req.body.interestedfield,
    mobilenumber : req.body.mobilenumber
  });
  res.render('success', { title: 'COVID-X' , entry : entry });
});
router.post('/contributeHelp', async function(req, res, next) {
  console.log(req.body);
  const entry = await Contribute.create({
    fullname : req.body.fullname,
    address : req.body.address,
    email : req.body.email,
    interestedfield: req.body.interestedfield,
    mobilenumber : req.body.mobilenumber
  });
  res.send(JSON.stringify(entry));
});
module.exports = router;

/*OFFER HELP*/
router.post('/offer', async function(req, res, next) {
  const entry = await Help.create({
    fullname : req.body.fullname,
    contact : req.body.contact,
    address : req.body.address,
    addinformation : req.body.addinformation,
    helpfor: req.body.helpfor
  });
  res.render('success', { title: 'COVID-X' , entry : entry });
});
router.post('/offerHelp', async function(req, res, next) {
  console.log(req.body);
  const entry = await Help.create({
    fullname : req.body.fullname,
    contact : req.body.contact,
    address : req.body.address,
    addinformation : req.body.addinformation,
    helpfor: req.body.helpfor
  });
  res.send(JSON.stringify(entry));
});
module.exports = router;

/* SHOW ENTRIES */
router.get('/allentries', async function(req, res, next) {
  const entries = await Entry.find().sort({createdAt: -1});
  res.send(entries);
});

/* SHOW VERIFIED ENTRIES */
router.get('/verifiedentries', async function(req, res, next) {
  const entries = await Entry.find({isVerified:true}).sort({createdAt: -1});
  res.send(entries);
});

/* Register Admin*/
router.post('/register',async function(req,res,next){
   const user  = await AdminLogin.create({
    username: req.body.username,
    password: req.body.password
  });
  AdminLogin.addUser(user,(err,result)=>{
    if(err){
      return res.json({success: false ,message:err});
    }
    return res.json({success:true, message: result});
  })
})
/* ADMIN DASHBOARD */
router.post('/adminlogin' ,async function(req,res,next){AdminLogin.login(req,res)});
