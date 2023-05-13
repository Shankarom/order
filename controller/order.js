
const Order = require('../model/order');

const { sendCustomError, sendSuccess, sendNoDataSuccess } = require('../utils/response');

const creteOrder = async (req, res) => {
    try {
      const { order_id,item_name,cost,order_date,delivery_date } = req.body;
      
      const existingOrder = await Order.findOne({ order_id});
    if (existingOrder) {
      return sendNoDataSuccess({}, res, 0, "Order already exists");
    }
    const orderDate = new Date(order_date);
    const finalOrderDate = new Date(orderDate.getTime() - orderDate.getTimezoneOffset() * 60000).toISOString();
    
    const deliveryDate = new Date(delivery_date);
    const finalDeliveryDate = new Date(deliveryDate.getTime() - deliveryDate.getTimezoneOffset() * 60000).toISOString();
    const order = new Order({
      order_id,
      item_name,
      cost,
      order_date: finalOrderDate,
      delivery_date: finalDeliveryDate,
    });

    const result = await order.save()
    return sendSuccess(result, res, 200, "Order created successfully");
        
    } catch (error) {
      return sendCustomError({}, res, error.code || 0, error.message);
    }
};

const updateOrder = async (req, res) => {
  try {
    const { delivery_date } = req.body;
    const { orderId } = req.query;

  const checkOrder = await Order.findOne({ order_id: orderId });
    if (!checkOrder) {
      return sendNoDataSuccess({}, res, 409, "Order not found");
    }
    const deliveryDate = new Date(delivery_date);
    const finalDeliveryDate = new Date(deliveryDate.getTime() - deliveryDate.getTimezoneOffset() * 60000).toISOString();
    checkOrder.delivery_date = finalDeliveryDate;

    await checkOrder.save();
    return sendSuccess({}, res, 200, "Order updated successfully");
  } catch (error) {
    return sendCustomError({}, res, error.code || 0, error.message);
  }
};

const getOrder = async (req, res) => {
  try {
    const { date } = req.query;
    
    const orderDate = new Date(date);
    const finalOrderDate = new Date(orderDate.getTime() - orderDate.getTimezoneOffset() * 60000).toISOString();

    const orders = await Order.find({ order_date: finalOrderDate });
    return sendSuccess(orders, res, 200, "Order fetched successfully");
  } catch (error) {
    return sendCustomError({}, res, error.code || 0, error.message);
  }
};

const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.query;
    
    const order = await Order.findOne({ order_id: orderId });
    if (!order) {
      return sendNoDataSuccess({}, res, 409, "Order not found");
    }

    return sendSuccess(order, res, 200, "Order fetched successfully");
  } catch (error) {
    return sendCustomError({}, res, error.code || 0, error.message);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.query;
    
    const result = await Order.deleteOne({ order_id: orderId });
    if (result.deletedCount === 0) {
      return sendNoDataSuccess({}, res, 409, "Order not found");
    }
    return sendSuccess({}, res, 200, "Order deleted successfully");
  } catch (error) {
    return sendCustomError({}, res, error.code || 0, error.message);
  }
};
  
  module.exports = {
    creteOrder,
    updateOrder,
    getOrder,
    getOrderById,
    deleteOrder
  }