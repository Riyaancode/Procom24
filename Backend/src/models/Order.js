const mongoose = require('mongoose');
const { OrderStatus } = require('../utils');

const OrderSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    paymentAmount: {
        type: Number,
        required: true
    },
    customerAccountNumber: {
        type: String,
        required: true
    },
    merchantAccountNumber: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    paymentPurpose: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: Object.values(OrderStatus), 
        required: true,
        default: OrderStatus.PENDING
    },
    qrCode: {
        type: String
    }
});

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

module.exports = Order;