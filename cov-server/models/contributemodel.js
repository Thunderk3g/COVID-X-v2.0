const mongoose = require('mongoose');

const contribute = mongoose.Schema(
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
    email: {
      type: String,
      trim: true,
    },
    mobilenumber: {
      type: String,
      required: true,
      trim: true,
    },
    interestedfield: {
        type: String,
        required: true,
        trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Contribute = mongoose.model('Contribute', contribute);

module.exports = Contribute;
