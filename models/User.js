const mongoose = require('mongoose');

// This is the blueprint for a User
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // A username is mandatory
    unique: true      // No two users can have the same username
  },
  password: {
    type: String,
    required: true  // A password is mandatory
  }
}, { timestamps: true }); // Automatically adds 'createdAt' and 'updatedAt' fields

// This creates the model and exports it so we can use it elsewhere in our app
module.exports = mongoose.model('User', UserSchema);