const mongoose = require('mongoose');

//schema
const staffSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: [3, 'the lastName must be equal or less than 3 charachters.'],
    maxlength: [30, 'the lastName must be equal or more than 30 charachters.'],
    required: [true, 'the staff must have a firstName.'],
    trim: true,
  },
  lastName: {
    type: String,
    minlength: [3, 'the lastName must be equal or less than 3 charachters.'],
    maxlength: [30, 'the lastName must be equal or more than 30 charachters.'],
    required: [true, 'the staff must have a lastName.'],
    trim: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'the staff must belong a user!'],
  },
  role: {
    type: mongoose.Schema.ObjectId,
    ref: 'Role',
    required: [true, 'the staff must belong a role!'],
  },
  createdAt: Date,
});

//model
const staffModel = mongoose.model('Staff', staffModel);

module.exports = staffModel;
