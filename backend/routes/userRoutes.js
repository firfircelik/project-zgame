const express = require('express');
const { register, login, deleteUser } = require('../controllers/userController');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', [
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
], register);

router.post('/login', [
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password is required').exists()
], login);

router.delete('/delete', authMiddleware, deleteUser);

module.exports = router;
