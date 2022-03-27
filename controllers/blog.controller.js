const blog_model = require("../models/blog.model")

exports.getBlog = async (req,res,next) => {
    try {
        let result = await blog_model.getAllArticle()
        res.render("blog",{
            articles: result,
            pageName:"blog"
        })
    } catch (error) {
        res.redirect("/error")
    }
}

exports.getArticleByTitle = async (req,res,next) => {
    try {
        let result = await blog_model.getArticleByTitle(req.params.url);
        res.render("article-page",{
            article: result,
            pageName:"blog"
        })
    } catch (error) {
        res.redirect("/error")
    }
}





