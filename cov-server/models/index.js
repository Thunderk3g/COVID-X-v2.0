const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.contribute= require("./contributemodel");
db.entry=require("./entrymodel");
db.offerhelp=require("./offerhelpmodel");
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;