const router = require("express").Router();
const auth_controller = require("../controllers/auth.controller");
const bodyparser = require("body-parser");


router.get("/login",auth_controller.getLogin)
router.post("/login",bodyparser.urlencoded({ extended: true }),auth_controller.postLogin)



module.exports = router