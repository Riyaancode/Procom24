const express = require('express');
const { createOrder, getAllOrders, getOrderById, updateOrders } = require('../controllers/orderController');
const authenticateUser = require('../config/middleware');

const router = express.Router();

router.post('/create', authenticateUser, createOrder);
router.get('/getAll', authenticateUser, getAllOrders);
router.get('/get/:id', authenticateUser, getOrderById);
router.put('/update/:id', authenticateUser, updateOrders)

module.exports = router;
