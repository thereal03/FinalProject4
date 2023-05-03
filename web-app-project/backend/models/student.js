const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
  name: {
    type: String
  },
  food: {
    type: String
  },
  amount: {
    type: String
  },
}, {
  collection: 'students'
})
module.exports = mongoose.model('Student', studentSchema)