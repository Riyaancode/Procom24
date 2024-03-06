const QRCode = require('qrcode');

const { logger } = require('../config/logger');
const Customer = require('../models/Customer');
const Order = require('../models/Order');

const OrderService = {

    createOrder: async (userName, email, paymentAmount, customerAccountNumber, merchantAccountNumber, bankName, paymentPurpose, status) => {
        try {
            console.log("order service")
            const customer = await Customer.findOne({ userName });

            if (!customer) {
                logger.error('Customer with this username not found');
                return res.status(404).json({ error: 'Customer not found' });
            }

            const orderDetails = {
                userName,
                email,
                paymentAmount,
                customerAccountNumber,
                merchantAccountNumber,
                bankName,
                paymentPurpose,
                status,
                customer: customer._id
            };

            const orderDetailsJson = JSON.stringify(orderDetails);

            const qrImage = await QRCode.toDataURL(orderDetailsJson);

            const newOrder = new Order({
                ...orderDetails,
                qrCode: qrImage
            });

            const savedOrder = await newOrder.save();
            return savedOrder;
        } catch (error) {
            throw error;
        }
    },


    getOrders: async () => {
        try {
            const orders = await Order.find();
            return orders;
        } catch (error) {
            throw error;
        }
    },

    getOrderByUserId: async (userId) => {
        try {
            const orders = await Order.find({ customer: userId });
            return orders;
        } catch (error) {
            throw error;
        }
    },

    getOrderById: async (id) => {
        try {
            const order = await Order.findById(id);
            return order;
        } catch (error) {
            throw error;
        }
    },

    updateOrder: async (id, update) => {
        try {
            const order = await Order.findByIdAndUpdate(id, {
                paymentAmount: update.paymentAmount,
                customerAccountNumber: update.customerAccountNumber,
                merchantAccountNumber: update.merchantAccountNumber,
                bankName: update.bankName,
                paymentPurpose: update.paymentPurpose,
                status: update.status
            }, { new: true });

            if (!order) {
                logger.error('Order not found');
                return res.status(404).json({ error: 'Order not found' });
            }

            return order;
        } catch (error) {
            throw error;
        }
    },

    deleteOrder: async (id) => {
        try {
            const order = await Order.findByIdAndDelete(id);
            return order;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = OrderService;