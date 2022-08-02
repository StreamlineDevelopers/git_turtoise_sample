const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// check data
const userSchema = new mongoose.Schema({
  mail: { type: String, unique: true },
  username: { type: String, trim: false, required: true },
  password: { type: String },
  number: { type: String, trim: true },
  pic: {
    type: String,
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  smsfriends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  isActive: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model("User", userSchema);
