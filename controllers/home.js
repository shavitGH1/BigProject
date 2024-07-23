//Handles requests that come from the cart's page


const menModels = require ('../models/men')
const womenModels = require ('../models/women')
const cartModels = require ('../models/cart')


function showHomePage(req, res){  
    res.render("home.ejs");
}

function showMenPage(req, res){
    const menItems = menModels.getAllMensItems();
    res.render("men.ejs",   { menItems });
}

function showWomenPage(req, res){
    const womenItems = womenModels.getAllWomensItems();
    res.render("women.ejs",   { womenItems });
}

function showBranchesPage(req, res){
    res.render("branches.ejs");
}

function showsignup(req, res){ 
    res.render("signUp.ejs");
}

function showlogin(req, res){ 
    res.render("logIn.ejs");
}

function showcart(req, res){
    const cartItems = cartModels.getCart();
    res.render("cart.ejs",   { cartItems });
}

//Exports all function
module.exports = {  showHomePage, 
                    showMenPage, 
                    showBranchesPage, 
                    showsignup, 
                    showlogin, 
                    showWomenPage, 
                    showcart};

