const { Signup, Login } = require("../controllers/AuthController");
const router = require("express").Router();
const { userVerification } = require("../Middlewares/AuthMiddleware");

// Add /verify route for authentication check
router.post("/verify", userVerification, (req, res) => {
  res.status(200).json({
    status: true,
    user: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
    },
  });
});
router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;