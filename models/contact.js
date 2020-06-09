const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: false
    },
    number: {
      type: Object,
      required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', postSchema);
