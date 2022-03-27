const mongoose = require("mongoose");
require('dotenv').config();


let date = `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDay()}`
const articleSchema = mongoose.Schema({
    title: String,
    url: String,
    desc: String,
    image: String,
    content: String,
    date: {
        type: String,
        default: date
    },

});

let Article = mongoose.model("article", articleSchema);



exports.createArticle = async (data) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let article = await Article.findOne({ url: data.url });
        if (article) {
            throw "dont create article"
        }
        await Article.create(data);
        await mongoose.disconnect();
        return "create article ok";
    } catch (error) {
        await mongoose.disconnect();
        throw "dont create article";
    }
};
exports.getAllArticle = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let article = await Article.find();
        await mongoose.disconnect();
        return article
    } catch (error) {
        await mongoose.disconnect();
        throw "dont get article"
    }
};

exports.getArticlesHome = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let article = await Article.find().limit(4);
        await mongoose.disconnect();
        return article
    } catch (error) {
        await mongoose.disconnect();
        throw "dont get article"
    }
};

exports.getArticleByTitle = async (url) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let article = await Article.findOne({ url: url });
        await mongoose.disconnect();
        return article
    } catch (error) {
        await mongoose.disconnect();
        throw "dont get article"
    }
}

exports.deleteArticle = async (id) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        await Article.deleteOne({ _id: id });
        await mongoose.disconnect();
        return "delete article"
    } catch (error) {
        await mongoose.disconnect();
        throw "dont get article"
    }
}