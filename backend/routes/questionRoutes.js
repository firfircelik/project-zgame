const express = require('express');
const { addQuestion, getQuestions } = require('../controllers/questionController');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', [
    check('question', 'Question is required').notEmpty(),
    check('answer', 'Answer is required').notEmpty()
], authMiddleware, addQuestion);

router.get('/', authMiddleware, getQuestions);

module.exports = router;
