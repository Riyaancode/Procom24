const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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
app.use(cors());

app.use('/api/auth', customerRoutes)
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Procom24' });
})

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

module.exports = app;
