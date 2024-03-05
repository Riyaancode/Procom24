const express = require('express');
const { signup, login, logout } = require('../controllers/customerController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
