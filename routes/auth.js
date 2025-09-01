const express = require('express');
const router = express.Router();
// Import BOTH register and login from our controller
const { register, login } = require('../controllers/authController');

// Route for registering a user
// POST /api/auth/register
router.post('/register', register);

// Route for logging in a user
// POST /api/auth/login
router.post('/login', login);

module.exports = router;