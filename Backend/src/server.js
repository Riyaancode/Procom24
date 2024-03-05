const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const { connectDB } = require('./config');
const { logger, loggerMiddleware } = require('./config/logger');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use('/api/auth', customerRoutes)
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

module.exports = app;
