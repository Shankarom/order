const router = require('express').Router();
const orderValidation = require('../../validation/orderValidation')

const orderController = require('../../controller/order')


router.post("/create", orderValidation.orderCreate,orderController.creteOrder);
router.put("/update", orderValidation.updateOrderId,orderValidation.updateOrder,orderController.updateOrder);
router.get("/list", orderValidation.orderByDate,orderController.getOrder);
router.get("/search", orderValidation.updateOrderId, orderController.getOrderById);
router.delete("/delete", orderValidation.updateOrderId, orderController.deleteOrder);

module.exports = router;