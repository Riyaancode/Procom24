const { verifyToken } = require('../utils');
const { logger } = require('./logger');

const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Token Required!' });
    }

    try {
        const decoded = verifyToken(token);
        req.user = decoded.user;
        next();
    } catch (error) {
        logger.error(`${error.message}, ${error}`);
        return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
};

module.exports = authenticateUser;