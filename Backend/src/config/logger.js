const winston = require('winston');

const enumerateErrorFormat = winston.format((info) => {
    if (info.message instanceof Error) {
        info.message = Object.assign({
            message: info.message.message,
            stack: info.message.stack
        });
    }
    return info;
});

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        enumerateErrorFormat(),
        winston.format.colorize(),
        winston.format.splat(),
        winston.format.printf(({ level, message }) => `${level}: ${typeof message === 'object' ? JSON.stringify(message) : message}`)
    ),
});

const loggerMiddleware = (req, res, next) => {
    const { method, url } = req;
    logger.info(`Request: ${method} ${url}`);

    const originalSend = res.send;
    res.send = function (data) {
        if (res.statusCode >= 400) {
            logger.error(`Response: ${res.statusCode} to ${req.method} ${req.url}`);
        } else {
            logger.info(`Response: ${res.statusCode} to ${req.method} ${req.url}`);
        }
        originalSend.apply(res, arguments);
    };

    next();
};

module.exports = {
    logger,
    loggerMiddleware
};
