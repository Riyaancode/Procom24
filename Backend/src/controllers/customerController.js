const { logger } = require('../config/logger');
const { emailRegex, passwordRegex } = require('../utils');
const CustomerService = require('../service/customerService');

module.exports.signup = async (req, res) => {
  const { userName, accountNo, email, phoneNo, password } = req.body;

  if (!emailRegex.test(email)) {
    logger.error('Invalid email format');
    return res.status(400).json({ error: 'Invalid email format' });
  }
  if (!passwordRegex.test(password)) {
    logger.error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
    return res.status(400).json({ error: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number' });
  }

  try {
    const newUser = await CustomerService.register(userName, accountNo, email, phoneNo, password);
    res.json(newUser);
    logger.info('Registered Successfully');
  } catch (error) {
    logger.error('Error during registration:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    logger.error('Invalid email or password');
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  try {
    const { user, token } = await CustomerService.login(email, password);
    res.json({ user, token });
  } catch (error) {
    logger.error('Error during login:', error);
    res.status(500).json({ error: error.message });
  }
};