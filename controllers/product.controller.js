const product_models = require("../models/product.model");



exports.getProductPage = (req, res, next) => {
    product_models.getProductByUrl(req.params.url).then(result => {
        res.render("product-page.ejs", {
            product: result,
            pageName: "product"
        })
    }).catch(error => {
        res.redirect("/error")

    })
}



