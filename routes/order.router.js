const router = require("express").Router();
const bodyparser = require("body-parser");
const order_controller = require("../controllers/order.controller")

router.get("/order/:id", order_controller.getOrderById);
router.post("/order/create",bodyparser.urlencoded({ extended: true }),order_controller.postOrder);


module.exports = router