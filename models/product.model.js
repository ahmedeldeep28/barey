const mongoose = require("mongoose");
require('dotenv').config();


const productSchema = mongoose.Schema({
    name: String,
    url: String,
    price: Number,
    newPrice: Number,
    desc: String,
    image: Array,
    isOffer: Boolean,
    catagory: String,
    typeAmount: String,
});

let Product = mongoose.model("product", productSchema);


exports.getAllProducts = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let products = await Product.find({ isOffer: false })
        await mongoose.disconnect();
        return products
    } catch (error) {
        await mongoose.disconnect();
        throw "error"
    }
}

exports.getAllOffer = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let products = await Product.find({ isOffer: true })
        await mongoose.disconnect();
        return products
    } catch (error) {
        await mongoose.disconnect();
        throw "error"
    }
}
exports.getProductsBycatagory = async (catagory) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let products = await Product.find({ catagory: catagory, isOffer: false })
        await mongoose.disconnect();
        return products
    } catch (error) {
        await mongoose.disconnect();
        throw "error"
    }
}
exports.getProductByUrl = async (url) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let product = await Product.findOne({ url })
        await mongoose.disconnect();
        return product
    } catch (error) {
        await mongoose.disconnect();
        throw "error"
    }
}

exports.createProduct = async (data) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        await Product.create(data);
        await mongoose.disconnect();
        return "ok create product"
    } catch (error) {
        await mongoose.disconnect();
        throw "not create product"
    }
}
exports.updatePriceProduct = async (data) => {
    console.log(data)
    try {
        await mongoose.connect(process.env.DB_URL);
        await Product.updateOne({ _id: data.id }, {
            price: data.price,
            newPrice: data.newPrice,
        });
        await mongoose.disconnect();
        return "ok updateOne product"
    } catch (error) {
        await mongoose.disconnect();
        throw "not updateOne product"
    }
}
exports.deleteProduct = async (id) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        await Product.deleteOne({ _id: id })
        await mongoose.disconnect();
        return "delete product"
    } catch (error) {
        await mongoose.disconnect();
        throw "error"
    }
}