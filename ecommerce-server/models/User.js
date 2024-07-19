const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "required First Name"],
  },
  lastName: {
    type: String,
    required: [true, "required First Name"],
  },
  contactEmail: {
    type: String,
    required: [true, "required Email"],
  },
  password: {
    type: String,
    required: [true, "require Password"],
  },
  birthDate: {
    type: Date,
    required: [true, "required Birth Day"],
  },
  contactPhone: {
    type: String,
    required: [true, "required Mobile No."],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
