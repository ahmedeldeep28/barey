const router = require("express").Router();
const contact_controller = require("../controllers/contact.controller")




router.get("/contact",contact_controller.getContact);


module.exports = router