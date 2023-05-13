const mongoose = require("mongoose")

const db = require('../config/database');

const OrderSchema = new mongoose.Schema(
{
    order_id: {
        type: String,
        unique: true,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    order_date: {
        type: Date,
        required: true
    },
    delivery_date: {
        type: Date,
        required: true
    }
},
{
    timestamps: true
}
)

  const Order = db.model('orders', OrderSchema);

  module.exports = Order;