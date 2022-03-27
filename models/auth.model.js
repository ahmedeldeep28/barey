const mongoose = require("mongoose");
require('dotenv').config();


const admin = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

let Admin = mongoose.model("admin", admin);

exports.creatAdmin = async () => {
    let data = {
            name: "ahmed",
            email: "raheg@gmail.com",
            password: "ahmed015"
        }
    try {
        await mongoose.connect(process.env.DB_URL);
        await Admin.create(data);
        mongoose.disconnect()

    } catch (error) {
            mongoose.disconnect()
            throw error;
    }
}

exports.login = async (data) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let admin = await Admin.findOne({email: data.email});
        if(admin) {
            if (admin.password == data.password) {
                return admin._id
            }else {
                mongoose.disconnect()
                throw "password dont";
            }
        } else {
            mongoose.disconnect()
            throw "email not avalb";

        }
    } catch (error) {
            mongoose.disconnect()
            throw error;
    }
}
