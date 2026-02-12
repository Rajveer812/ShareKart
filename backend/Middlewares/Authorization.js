const { UserModel } = require("../model/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        type: "AUTH_ERROR",
        message: "Please login to continue",
      });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await UserModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        type: "AUTH_ERROR",
        message: "User does not exist",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      type: "AUTH_ERROR",
      message: "Session expired. Please login again",
    });
  }
};
