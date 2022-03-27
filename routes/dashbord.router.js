const router = require("express").Router();
const multer = require("multer");
const bodyparser = require("body-parser");
const auth_guards = require("./guards/guard.auth");

const dashbord_controller = require("../controllers/dashbord.controller.js");

//handel router dashbord home 
router.get("/dashbord", auth_guards.isAdmin, dashbord_controller.getdashBord);


const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "images/")
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        },
    })
});


//handel router dashbord blog 

router.get("/dashbord/blog", auth_guards.isAdmin, dashbord_controller.getDisplayBlog);
router.get("/dashbord/blog/create", auth_guards.isAdmin, dashbord_controller.getAddBlog);
router.post("/dashbord/blog/create", auth_guards.isAdmin, upload.single("image"), dashbord_controller.postBlog);
router.get("/blog/delete/:id", auth_guards.isAdmin, dashbord_controller.deleteArticle);


//handel router dashbord product 
router.get("/dashbord/products", auth_guards.isAdmin, dashbord_controller.getProducts)
router.get("/dashbord/product/create", auth_guards.isAdmin, dashbord_controller.getAddProduct)
router.post("/dashbord/product/create", auth_guards.isAdmin, upload.array("image", 50), dashbord_controller.postProduct)
router.post("/dashbord/product/update", auth_guards.isAdmin, bodyparser.urlencoded({ extended: true }), dashbord_controller.updateProduct)
router.get("/dashbord/product/delete/:id", auth_guards.isAdmin, dashbord_controller.deleteProduct)


//handel router dashbord order 
router.get("/dashbord/order", dashbord_controller.getOrder);
router.post("/dashbord/order/update", bodyparser.urlencoded({ extended: true }), dashbord_controller.updateOrder);



module.exports = router