const mongoose = require('mongoose');

//schema
const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'the role must have a name.'],
    unique: true,
  },
});

//model
const roleModel = mongoose.model('Role', roleModel);

module.exports = roleModel;
