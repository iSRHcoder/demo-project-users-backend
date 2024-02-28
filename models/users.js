const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: [true, "fullName is required field"],
    },
    address: {
      type: String,
      require: [true, "address is required field"],
    },
    mobileNum: {
      type: Number,
      required: [true, "Mobile Number is required field"],
    },
    education: {
      type: String,
      required: [true, "education is required field"],
    },
    email: {
      type: String,
      required: [true, "email is required field"],
    },
    password: {
      type: Number,
      required: [true, "password is required field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("db_user", userSchema);
