const mongoose = require('mongoose');

const help = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    contact: {
      type: String,
      required: true,
      trim: true,
    },
    addInformation: {
        type: String,
        trim: true,
    },
    helpfor:{
      type:String,
      trim: true,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Help = mongoose.model('Help', help);

module.exports = Help;
