const express = require("express");
const passport = require("passport");
const router = express.Router();

/**
 * @description Auth with Google
 * @route GET /auth.google
 */

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

/**
 * @description Google auth callback
 * @route GET /auth/google/callback
 */

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "success",
      user: req.user,
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/products",
    failureRedirect: "/login/failed",
  })
);

/**
 * @description logout User
 * @route GET /auth/logout
 */
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000");
});

module.exports = router;
