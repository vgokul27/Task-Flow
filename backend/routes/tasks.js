const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getTaskStats,
} = require("../controllers/taskController");
const { protect } = require("../middleware/auth");
const {
  createTaskValidation,
  updateTaskValidation,
  validateObjectId,
} = require("../utils/validation");

router.get("/stats", protect, getTaskStats);

router
  .route("/")
  .get(protect, getTasks)
  .post(protect, createTaskValidation, createTask);

router
  .route("/:id")
  .get(protect, validateObjectId, getTask)
  .put(protect, [...validateObjectId, ...updateTaskValidation], updateTask)
  .delete(protect, validateObjectId, deleteTask);

module.exports = router;
