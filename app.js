require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const express = require("express");
const app = express();
const session = require('express-session');
app.use(session({
    secret: 'foo',
    saveUninitialized: false,
    resave: false
}))

const home = require('./routes/page');
const login = require('./routes/login');
const women = require('./routes/women');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use("/products", require("./routes/products"));

app.use(express.static('public')); //using static files

app.use(home);
app.use(login);
app.use(women);

app.listen(80);

app.listen(process.env.PORT);
