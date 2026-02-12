const mongoose = require("mongoose");
const { UserSchema } = require("../schemas/UserSchema");

// Model name must be 'User' to match ref in other schemas
const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel };