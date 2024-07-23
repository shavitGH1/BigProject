//Handles requests that come from the cart's page


const cartModels = require ('../models/cart')


function showCart(req, res){  //Shows the cart page
    const cartItems = cartModels.getCart();
    res.render("cart.ejs",   { cartItems });
}

//Exports all function
module.exports = {
    showCart
};


