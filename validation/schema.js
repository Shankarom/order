const Joi = require('joi').extend(require('@joi/date'));

const orderCreate = Joi.object({
    order_id: Joi.string().trim().required(),
    item_name: Joi.string().required(),
    cost: Joi.number().required(),
    order_date: Joi.date().format('YYYY/MM/DD').raw().required(),
    delivery_date: Joi.date().format('YYYY/MM/DD').raw().required(),
});
const orderId = Joi.object({
    orderId: Joi.string().trim().required()
});

const updateOrder = Joi.object({
    delivery_date: Joi.date().format('YYYY/MM/DD').raw().required(),
});

const orderByDate = Joi.object({
    date: Joi.date().format('YYYY/MM/DD').raw().required(),
});

module.exports = {
    orderCreate,
    orderId,
    updateOrder,
    orderByDate
}