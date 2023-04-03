const mongoose = require('mongoose');
const validator = require('validator');

//schema
const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'the customer must have a firstName.'],
    minlength: [3, 'the firstName must be equal or less than 3 charachters.'],
    maxlength: [30, 'the firstName must be equal or more than 30 charachters.'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'the customer must have a lastName.'],
    minlength: [3, 'the lastName must be equal or less than 3 charachters.'],
    maxlength: [30, 'the lastName must be equal or more than 30 charachters.'],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'the customer must have a phone.'],
    validate: {
      validator: function (value) {
        return validator.isMobilePhone(value, 'fa-IR');
      },
      message: 'please enter a valid phone',
    },
  },
  createdAt: Date,
});

//model
const customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel;
