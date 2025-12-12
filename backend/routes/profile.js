const express = require("express");
const router = express.Router();
const {
  getProfile,
  updateProfile,
  deleteProfile,
} = require("../controllers/profileController");
const { protect } = require("../middleware/auth");
const { updateProfileValidation } = require("../utils/validation");

router
  .route("/")
  .get(protect, getProfile)
  .put(protect, updateProfileValidation, updateProfile)
  .delete(protect, deleteProfile);

module.exports = router;
