const { logger } = require('../config/logger');
const Customer = require('../models/Customer');
const { hashPassword, comparePasswords, generateToken } = require('../utils/index');


const CustomerService = {
    register: async (userName, accountNo, email, phoneNo, password) => {
        try {
            const user = await Customer.findOne({ email: email });

            if (!user) {
                const hashedPassword = await hashPassword(password);
                const newUser = new Customer({
                    userName,
                    accountNo,
                    email,
                    phoneNo,
                    password: hashedPassword,
                });
                const savedUser = await newUser.save();
                return savedUser;
            } else {
                throw new Error('Customer with this email already exists');
            }
        } catch (error) {
            throw error;
        }
    },


    login: async (email, password) => {
        try {
            if (!email || !password) {
                logger.error('Invalid email or password');
                throw error('Invalid email or password');
            }

            const user = await Customer.findOne({ email });

            if (!user) {
                logger.error('Customer With this email not found ')
                throw new Error('Customer With this email not found');
            }

            const passwordMatch = await comparePasswords(password, user.password);

            if (!passwordMatch) {
                logger.error('Invalid password')
                throw new Error('Invalid password');
            }

            const token = generateToken({ userId: user._id, userEmail: user.email, userName: user.userName, accountNo: user.accountNo, phoneNo: user.phoneNo});

            logger.info('Logged In Successfully')
            return { user, token };
        } catch (error) {
            logger.error('Error during login:', error);
            throw error;
        }
    },

    

};

module.exports = CustomerService;