const auth_model = require("../models/auth.model");

exports.getLogin = (req,res,next) => {
    res.render("login");
}

exports.postLogin = async (req,res,next) => {
    try {
       let adminId = await auth_model.login(req.body);
       req.session.adminId = String(adminId._id);
       res.redirect("/dashbord")
    } catch (error) {
        console.log(error);
       res.redirect("/dashbord")
    }
}