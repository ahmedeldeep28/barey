const express = require("express");
const bodyparser = require("body-parser").json();
const compression = require("compression")

require('dotenv').config();
const path = require("path");
const app = express();
const home_router = require("./routes/home.router");
const order_router = require("./routes/order.router");
const shop_router = require("./routes/shop.router");
const blog_router = require("./routes/blog.router");
const dashbord_router = require("./routes/dashbord.router");
const contact_router = require("./routes/contact.router");
const auth_router = require("./routes/auth.router");

const session = require("express-session")
const SessionStore = require("connect-mongodb-session")(session)

app.use(express.static(path.join(__dirname, "assets")));
app.use(compression());
app.use(express.static(path.join(__dirname, "images")));
app.use(bodyparser);
app.set("view engine", "ejs");
app.set("views", "views");


const STORE = new SessionStore({
    uri: process.env.DB_URL,
    collection: "session"
});

app.use(session({
    secret: "the text test secret secret",
    saveUninitialized: false,
    store: STORE
}))



app.use(home_router);
app.use(order_router);
app.use(shop_router);
app.use(contact_router);
app.use(auth_router);
app.use(dashbord_router);
app.use(blog_router);

app.use("/error",(rea, res) => {
    res.render("error", {
        pageName: "error"
    })
});

app.use((rea, res) => {
    res.render("not-found", {
        pageName: "not-found"
    })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server start on port " + PORT));