var express = require('express');
var router = express.Router();
const Entry = require('../models/entry.model');
router.post('/get', async function(req, res, next) {
    const entry = await Entry.create({
      name : req.body.name,
      phone : req.body.phone,
      address :req.body.address,
      gender: req.body.gender,
      otherInfo: req.body.otherInfo,
      urgency: req.body.urgency
    });
    Entry.addEntry(entry ,(err,result) =>{
      if(err){
        return res.json({success:false ,message :err});
      }
      return res.json({success:true ,message:result});
    })
  });
  router.get('/entries', async function(req, res, next) {
    const entries = await Entry.find().sort({createdAt: -1});
    Entry.showEntry(req.body.name , req.body.phone ,req.body.address ,req.body.urgency ,req.body.gender , (err , result) =>{
      if(err){
        return res.json({success:false , message:err});
      }
      return res.json({success:true , message:res});
    })
  });
  module.exports = router;
  