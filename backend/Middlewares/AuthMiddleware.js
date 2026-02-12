const { UserModel } = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: false, message: "No token provided" });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ status: false, message: "Invalid token" });
    } else {
      const user = await UserModel.findById(data.id);
      if (user) {
        req.user = user;
        next();
      } else {
        return res.status(401).json({ status: false, message: "User not found" });
      }
    }
  });
};