const mongoose = require('mongoose');
const validator = require('validator');

//schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'the user must have an email.'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please enter a valid email.'],
  },
  password: {
    type: String,
    required: [true, 'the user must have a password.'],
    minlength: [8, 'password must be more or equal to 8 charachters.'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'the user must have a passwordConfirm.'],
    validate: {
      validator: function (el) {
        return this.password === el;
      },
      message: 'the passwordConfirm not equal to password.',
    },
  },
  createdAt: Date,
  passwordChangeAt: Date,
  passwordRestToken: String,
  passwordResetExpreAt: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

//model
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
