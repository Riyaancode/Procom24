const QRCode = require('qrcode');

const { logger } = require('../config/logger');
const Customer = require('../models/Customer');
const Order = require('../models/Order');
const { formatForQRMapping, generateQRCode } = require('../utils/qr');
const { emailRegex } = require('../utils');

const OrderService = {

    createOrder: async (userName, email, paymentAmount, customerAccountNumber, merchantAccountNumber, bankName, paymentPurpose, status) => {
        try {
            const customer = await Customer.findOne({ userName });

            if (!customer) {
                throw new Error('Customer with this username not found');
            }

            if (!emailRegex.test(email)) {
                throw new Error('Invalid email format');
            }

            const validCustomerPrefixes = ['02', '04', '15', '27'];
            const customerPrefix = customerAccountNumber.slice(0, 2);
            const customerAccountNumberLength = customerAccountNumber.length;

            if (!validCustomerPrefixes.includes(customerPrefix)) {
                throw new Error('Invalid customer account number prefix, it should be 02, 04, 15 or 27');
            }

            // 18 total length with tagId
            if ((customerPrefix === '02' || customerPrefix === '04' || customerPrefix === '15') && customerAccountNumberLength !== 18) {
                throw new Error(`Invalid length for customer's Visa | Mastercard | Unionpay account number`);
            }

            // 44 total length with tagId
            if (customerPrefix === '27' && customerAccountNumberLength !== 44) {
                throw new Error(`Invalid length for customer's Raast account number`);
            }

            const validMerchantPrefixes = ['02', '04', '15', '27'];
            const merchantPrefix = merchantAccountNumber.slice(0, 2);
            const merchantAccountNumberLength = merchantAccountNumber.length;

            if (!validMerchantPrefixes.includes(merchantPrefix)) {
                throw new Error('Invalid merchant account number prefix,it should be 02, 04, 15 or 27');
            }

            // 18 total length with tagId
            if ((merchantPrefix === '02' || merchantPrefix === '04' || merchantPrefix === '15') && merchantAccountNumberLength !== 18) {
                throw new Error(`Invalid length for merchant's 's Visa | Mastercard | Unionpay account number`);
            }

            // 44 total length with tagId
            if (merchantPrefix === '27' && merchantAccountNumberLength !== 44) {
                throw new Error(`Invalid length for merchant's Raast account number`);
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

            const orderDetailsForQR = {
                userName: userName.replace(userName, '0099887766'),
                email: email.replace(email, '6655778844'),
                paymentAmount,
                customerAccountNumber,
                merchantAccountNumber,
                bankName: bankName.replace(bankName, '001122334455667788'),
                paymentPurpose: paymentPurpose.replace(paymentPurpose, '9988776655'),
                status: status.replace(status, '1122334455'),
                customer: orderDetails.customer
            };


            const qrData = formatForQRMapping(orderDetailsForQR);
            const qrImage = await generateQRCode(qrData);


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



    getOrders: async (page = 1, limit = 10) => {
        try {
            const skip = (page - 1) * limit;
            const orders = await Order.find().skip(skip).limit(limit);
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