const { Question } = require('../config/sequelize');
const { validationResult } = require('express-validator');

exports.addQuestion = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { question, answer } = req.body;
    try {
        const newQuestion = await Question.create({ userId: req.user.id, question, answer });
        res.status(201).json(newQuestion);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll({ where: { userId: req.user.id } });
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
