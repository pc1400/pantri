const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: {
    type: String,
    default: ""
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    default: []
  },
  recipes: {
    type: Array,
    default: []
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;

