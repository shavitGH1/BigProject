require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION_STRING)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const express = require("express");
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'foo', // Consider storing this in .env for security
    saveUninitialized: false,
    resave: false
}));

const home = require('./routes/page');
const login = require('./routes/login');
const women = require('./routes/women');
//const cart = require('./routes/cart');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use("/products", require("./routes/products"));
//app.use('/cart', cart);

app.use(express.static('public')); // using static files

app.use(home);
app.use(login);
app.use(women);

// Listen on port specified in environment variables or default to port 80
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
