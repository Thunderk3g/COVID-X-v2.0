const mongoose = require('mongoose');
const { response } = require('../app');

const adminlogin = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

  
const AdminLogin = mongoose.model('AdminLogin', adminlogin);
//save user to db
AdminLogin.addUser=function(user,callback){
  user.save((err,result)=>{
    if(err){
      console.log(err);
      return callback('failed to add',null);
    }else{
      callback(null,'user added');
    }
  })
}
//login
AdminLogin.login=function(request,response){
  AdminLogin.findOne({username:request.body.username},(err,adminlogin)=>{
    console.log(adminlogin);
    if(adminlogin==undefined){
      response.json({status:false , message:"user not fount"});
    }else{
      if(request.body.password == adminlogin.password){
        response.json({status:true , message:"Success"});
      }else{
        response.json({status:false ,message:"LogiN Info Incorrect"});
      }
    }
  }
  )}

  
module.exports = AdminLogin;
