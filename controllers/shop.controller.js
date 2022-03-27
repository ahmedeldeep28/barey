const product_models = require("../models/product.model");

exports.getShop = async (req, res, next) => {
    try {
        let products = await product_models.getAllProducts();
        res.render("shop", {
            products: products,
            pageName: "shop",
            isOffer: false

        })
    } catch (error) {
        res.redirect("/error")
    }
}
exports.getOffer = async (req, res, next) => {
    try {
        let products = await product_models.getAllOffer();
        res.render("shop", {
            products: products,
            pageName: "offer",
            isOffer: true
        })
    } catch (error) {
        res.redirect("/error")
    }
}

exports.getprdoctsByCatagroy = async (req, res, next) => {
    try {
        let products = await product_models.getProductsBycatagory(req.params.catagory);
        res.render("product-filter", {
            products: products,
            pageName: "filter",
            catagory: req.params.catagory,
        })
    } catch (error) {
        res.redirect("/error")
    }
}