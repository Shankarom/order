const orderValidation = require('./schema');
const { sendCustomError } = require('../utils/response');

exports.orderCreate = (req, res, next) => {
    const { error } = orderValidation.orderCreate.validate(req.body);
    const valid = error == null;
    if (valid) {
        return next();
    }
    else {
        const { details } = error;
        const message = details.map((i) => i.message).join(',');
        return sendCustomError({ }, res, 0, message);
    }
};

exports.updateOrderId = (req, res, next) => {
    const { error } = orderValidation.orderId.validate(req.query);
    const valid = error == null;
    if (valid) {
        return next();
    }
    else {
        const { details } = error;
        const message = details.map((i) => i.message).join(',');
        return sendCustomError({ }, res, 0, message);
    }
};

exports.updateOrder = (req, res, next) => {
    const { error } = orderValidation.updateOrder.validate(req.body);
    const valid = error == null;
    if (valid) {
        return next();
    }
    else {
        const { details } = error;
        const message = details.map((i) => i.message).join(',');
        return sendCustomError({ }, res, 0, message);
    }
};

exports.orderByDate = (req, res, next) => {
    const { error } = orderValidation.orderByDate.validate(req.query);
    const valid = error == null;
    if (valid) {
        return next();
    }
    else {
        const { details } = error;
        const message = details.map((i) => i.message).join(',');
        return sendCustomError({ }, res, 0, message);
    }
};