
const mongoose = require('mongoose');

const entry = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    otherinfo: {
      type: String,
      trim: true,
    },
    urgency: {
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);
const Entry = mongoose.model('Entry', entry);
// save user to database
Entry.addEntry = function(entry,callback){
  entry.save((err,result)=>{
    if(err){
      console.log(err);
      return callback('Failed to add entry',null);
    } else{
      callback(null,'Entry added');
    }
  })
}
Entry.showEntry = function(name,address,phone,gender,urgency,otherinfo,callback){
  entry.save((err,result)=>{
    if(err){
      console.log(err);
      return callback('Failed to add entry',null);
    } else{
      callback(null,'Entry added');
    }
  })
}
module.exports = Entry;