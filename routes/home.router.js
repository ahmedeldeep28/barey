const router = require("express").Router();
const home_controller = require("../controllers/home.controller")

router.get("/",home_controller.getHome);


module.exports = router