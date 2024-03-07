const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    accountNo: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

const Customer = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
