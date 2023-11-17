// Routes/UserRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

const { registerUser, loginUser } = userController;

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
