const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Invalid email"],
    },
    role: { type: String, required: true, default: "admin" }, // Add role field to the schema
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
