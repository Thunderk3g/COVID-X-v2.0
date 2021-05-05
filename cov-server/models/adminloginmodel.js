const mongoose = require('mongoose');

const adminlogin = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
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

const AdminLogin = mongoose.model('AdmingLogin', adminlogin);

module.exports = AdminLogin;
