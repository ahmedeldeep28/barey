const router = require("express").Router();
const blog_controller = require("../controllers/blog.controller");


router.get("/blog",blog_controller.getBlog);
router.get("/artcile/:url",blog_controller.getArticleByTitle);




module.exports = router