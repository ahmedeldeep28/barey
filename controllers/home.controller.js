const product_models = require("../models/product.model");
const blog_models = require("../models/blog.model");

exports.getHome = async (req, res, next) => {
    try {
        let products = await product_models.getAllProducts()
        let articles = await blog_models.getArticlesHome()

        await res.render("index", {
            products: products,
            articles: articles,
            pageName: "home"
        })
    } catch (error) {
        res.redirect("/error")
    }

}

