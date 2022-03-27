const order_models = require("../models/order.model");
const product_models = require("../models/product.model");

exports.getOrderById = async (req, res, next) => {
    try {
        let result = await order_models.getOrderById(req.params.id);
        await res.render("order", {
            order: result,
            pageName: "order"
        })
    } catch (error) {
        res.redirect("/error")
    }
}


exports.postOrder = async (req, res, next) => {
    let amount = +req.body.amount;
    let productPrice = +req.body.productPrice;
    req.body.total = amount * productPrice + 35;

    try {
        let orderId = await order_models.createOrder(req.body);
        await res.redirect(`/order/${orderId}`)

    } catch (error) {
        await res.redirect(`/order/${orderId}`)
    }

}

