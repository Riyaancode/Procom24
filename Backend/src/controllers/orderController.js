const { logger } = require('../config/logger');
const { emailRegex, OrderStatus } = require('../utils');
const OrderService = require('../service/orderService');

module.exports.createOrder = async (req, res) => {
    const { userName, email, paymentAmount, customerAccountNumber, merchantAccountNumber, bankName, paymentPurpose, status } = req.body;

    if (email && !emailRegex.test(email)) {
        logger.error('Invalid email format');
        return res.status(400).json({ error: 'Invalid email format' });
    }

    if (!Object.values(OrderStatus).includes(status)) {
        logger.error('Invalid order status');
        return res.status(400).json({ error: 'Invalid order status' });
    }

    try {
        const newOrder = await OrderService.createOrder(userName, email, paymentAmount, customerAccountNumber, merchantAccountNumber, bankName, paymentPurpose, status);
        const { qrCode, ...orderDetails } = newOrder.toObject();

        res.json({ qrCode, ...orderDetails });
        logger.info('Order Created Successfully!');
    } catch (error) {
        logger.error('Error during registration:', error);
        res.status(500).json({ error: error.message });
    }
}

module.exports.getAllOrders = async (req, res) => {
    try {
        const orders = await OrderService.getOrders()
        res.json(orders);
    } catch (error) {
        logger.error('Error getting orders:', error);
        res.status(500).json({ error: error.message });
    }
}

module.exports.getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await OrderService.getOrderById(id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        logger.error('Error getting order:', error);
        res.status(500).json({ error: error.message });
    }
}

module.exports.updateOrders = async (req, res) => {
    const { id } = req.params;
    const { paymentAmount, customerAccountNumber, merchantAccountNumber, bankName, paymentPurpose, status } = req.body;

    if (!Object.values(OrderStatus).includes(status)) {
        logger.error('Invalid order status');
        return res.status(400).json({ error: 'Invalid order status' });
    }

    try {
        const updatedOrder = await OrderService.updateOrder(id, {
            paymentAmount,
            customerAccountNumber,
            merchantAccountNumber,
            bankName,
            paymentPurpose,
            status
        });

        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }

        return res.json(updatedOrder);
    } catch (error) {
        logger.error('Error updating order status:', error);
        return res.status(500).json({ error: error.message });
    }
};