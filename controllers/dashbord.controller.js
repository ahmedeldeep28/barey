const order_models = require("../models/order.model");
const product_models = require("../models/product.model");
const blog_models = require("../models/blog.model");



//start handel controller dashbord home 
exports.getdashBord = async (req, res, next) => {
    try {
        await res.render("dashbord.ejs")
    } catch (error) {
        res.redirect("/error")
    }

}


//start handel controller dashbord bloge 
exports.getDisplayBlog = async (req, res, next) => {
    try {
        let result = await blog_models.getAllArticle()
        res.render("display-article", {
            articles: result
        })
    } catch (error) {
        res.redirect("/error")
    }
}

exports.getAddBlog = async (req, res, next) => {
    try {
        res.render("add-blog")
    } catch (error) {
        res.redirect("/error")
    }
}

exports.postBlog = async (req, res, next) => {

    let titlePath = req.body.url.split(" ").join("-");
    req.body.url = titlePath;
    req.body.image = req.file.filename;

    try {
        let result = await blog_models.createArticle(req.body)
        res.render("add-blog", {
            message: result
        })
    } catch (error) {
        res.redirect("/error")
    }
}

exports.deleteArticle = async (req, res, next) => {

    try {
        let result = await blog_models.deleteArticle(req.params.id)
        res.redirect("/dashbord/blog")
    } catch (error) {
        res.redirect("/error")
    }
}


//start handel controller dashbord product

exports.getProducts = (req, res, next) => {
    product_models.getAllProducts().then(result => {
        res.render("display-product.ejs", {
            products: result
        })
    }).catch(error => {
        res.redirect("/error")
    })
}

exports.getAddProduct = (req, res, next) => {
    res.render("add-product.ejs")
}

exports.postProduct = async (req, res, next) => {
    try {

        let arr = []
        for (let i = 0; i <= req.files.length - 1; i++) {
            var images = req.files[i].filename
            arr.push(images)
        }
        req.body.image = arr
        req.body.url = req.body.name.split(" ").join("-")
        req.body.isOffer = (req.body.isOffer = Boolean(req.body.isOffer))

        let result = await product_models.createProduct(req.body)
        res.render("add-product", {
            message: result
        })

    } catch (error) {
        res.render("add-product", {
            message: error
        })
    }


};

exports.updateProduct = (req, res, next) => {
    product_models.updatePriceProduct(req.body).then(result => {
        res.redirect("/dashbord/products")
    }).catch(error => {
        res.redirect("/error")
    })
};

exports.deleteProduct = (req, res, next) => {
    product_models.deleteProduct(req.params.id).then(result => {
        res.redirect("/dashbord/products")
    }).catch(error => {
        res.redirect("/error")
    })

};


//start handel controller dashbord order 
exports.getOrder = async (req, res, next) => {
    try {
        let orderProcess = await order_models.getOrderProcess();
        let orderFinished = await order_models.getOrderFinished();
        await res.render("display-order.ejs", {
            orderProcess: orderProcess,
            orderFinished: orderFinished
        })
    } catch (error) {
        res.redirect("/error")
    }
}


exports.updateOrder = async (req, res, next) => {
    try {
        await order_models.updateStatusOrder(req.body);
        await res.redirect("/dashbord/order")
    } catch (error) {
        res.redirect("/error")
    }
}