const mongoose = require("mongoose");
require('dotenv').config();


let date = `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDay()}`
const orderSchema = mongoose.Schema({
    fullName: String,
    productName: String,
    productPrice: String,
    phone: String,
    amount: Number,
    typeAmount: String,
    area: String,
    address: String,
    total: String,
    date: {
        type: String,
        default: date
    },
    status: {
        type: String,
        default: "جاري التوصيل"
    }
});

let Order = mongoose.model("order", orderSchema);


exports.createOrder = async (data) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let order = await Order.create(data);
        return order._id
        
    } catch (error) {
        throw "order dont create"

    } finally {
        await mongoose.disconnect()
    }
}
exports.getOrderProcess = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
       let orders =  await Order.find({status:"جاري التوصيل"})
        await mongoose.disconnect()
        return orders
        
    } catch (error) {
        await mongoose.disconnect()
        throw "order dont get all"
    }
}

exports.getOrderFinished = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let orders =  await Order.find({status:"تم التوصيل"})
        await mongoose.disconnect()
        return orders
        
    } catch (error) {
        await mongoose.disconnect()
        throw "order dont get all"
    }
}
exports.getOrderById = async (id) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let order = await Order.findById(id)
        await mongoose.disconnect();
        return order
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
}

exports.updateStatusOrder = async (data) => {
    console.log(data.status)
    try {
        await mongoose.connect(process.env.DB_URL);
        let order = await Order.updateOne({_id: data.orderId},{status: data.newStatus});
        await mongoose.disconnect();
        return order
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
}