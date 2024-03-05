const mongoose = require('mongoose');
const { logger } = require('../config/logger');

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_DB_URI || '';
        await mongoose.connect(mongoURI);
        logger.info('Connected to Database');
    } catch (error) {
        logger.error('Could not connect to Database:', error.message);
        process.exit(1);
    }
};

module.exports = {
    connectDB
};