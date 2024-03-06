const { logger } = require('../config/logger');
const Order = require('../models/Order');
const QRCode = require('qrcode');

const OrderService = {

    createOrder: async (userName, email, paymentAmount, customerAccountNumber, merchantAccountNumber, bankName, paymentPurpose, status) => {
        try {
            const orderDetails = {
                userName,
                email,
                paymentAmount,
                customerAccountNumber,
                merchantAccountNumber,
                bankName,
                paymentPurpose,
                status
            };

            const orderDetailsJson = JSON.stringify(orderDetails);

            const qrImage = await QRCode.toDataURL(orderDetailsJson);

            const newOrder = new Order({
                userName,
                email,
                paymentAmount,
                customerAccountNumber,
                merchantAccountNumber,
                bankName,
                paymentPurpose,
                status,
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
                throw new Error('Order not found');
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