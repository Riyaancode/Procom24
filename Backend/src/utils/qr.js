const QRCode = require('qrcode');

function formatValue(tagId, value) {
    value = value.toString();
    
    const length = value.length.toString().padStart(2, "0");
    
    return `${tagId}${length}${value}`;
}

function formatForQRMapping(orderDetails) {
    let formattedData = "";

    Object.entries(orderDetails).forEach(([key, value]) => {
        const tagIds = {
            userName: "59",
            email: "03",
            paymentAmount: "04",
            customerAccountNumber: "05",
            merchantAccountNumber: "06",
            bankName: "07",
            paymentPurpose: "08",
            status: "09",
            customer: "10"
        };

        const tagId = tagIds[key];
        
        if (tagId) {
            formattedData += formatValue(tagId, value);
        }
    });

    return formattedData;
}

async function generateQRCode(orderDetailsJson) {
    try {
        const qrCodeDataURL = await QRCode.toDataURL(orderDetailsJson);
        return qrCodeDataURL;
    } catch (error) {
        throw error;
    }
}

module.exports = {generateQRCode, formatForQRMapping};