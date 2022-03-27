const Router  = require("express").Router();
const shop_controller = require("../controllers/shop.controller");
const product_controller = require("../controllers/product.controller");


Router.get("/shop",shop_controller.getShop)
Router.get("/offer",shop_controller.getOffer)
Router.get("/shop/:catagory",shop_controller.getprdoctsByCatagroy)
Router.get("/product/:url", product_controller.getProductPage)


module.exports = Router