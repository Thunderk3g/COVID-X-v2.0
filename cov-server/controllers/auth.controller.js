const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const Entry = require('../models/entrymodel');
const Contribute = require('../models/contributemodel');
const Help = require('../models/offerhelpmodel');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token
      });
    });
};

exports.postentry = async function(req, res, next) {
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
};
exports.updateentry = async function(req, res, next) {
  console.log(req.body);
  const entry = await Entry.findByIdAndUpdate(req.body._id,req.body);
  res.send(JSON.stringify(entry));
};
exports.contributenow = async function(req, res, next) {
    console.log(req.body);
    const entry = await Contribute.create({
    fullname : req.body.fullname,
    address : req.body.address,
    email : req.body.email,
    interestedfield: req.body.interestedfield,
    mobilenumber : req.body.mobilenumber
  });
  res.send(JSON.stringify(entry));
};
exports.offerhelp =  async function(req, res, next) {
  console.log(req.body);
  const entry = await Help.create({
    fullname : req.body.fullname,
    contact : req.body.contact,
    address : req.body.address,
    addinformation : req.body.addinformation,
    helpfor: req.body.helpfor
  });
  res.send(JSON.stringify(entry));
};

exports.getall = async function(req, res, next) {
  const entries = await Entry.find().sort({createdAt: -1});
  res.send(entries);
}

exports.getverified = async function(req, res, next) {
  const entries = await Entry.find({isVerified:true}).sort({createdAt: -1});
  res.send(entries);
}