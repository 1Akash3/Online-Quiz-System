const express = require("express");
const router = express.Router();
const controller = require("../controllers/quizController");

router.get("/categories", controller.getCategories);
router.get("/questions/:category", controller.getQuestions);
router.post("/submit", controller.submitQuiz);

module.exports = router;