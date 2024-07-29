/*const menModels = require ('../models/men')
const womenModels = require ('../models/women')
const cartModels = require ('../models/cart')
const graphModels = require ('../models/graph')*/


//**********************************************************************************//
const productService = require("../services/products");
const loginService = require("../services/login");
const graphModels = require ('../models/graph')

function showHomePage(req, res){ 
    res.render("home.ejs");
}

async function showMenPage(req, res){
  const menItems = await productService.getMenProducts();
  const username = req.session.username;
  res.render("men.ejs",   { username, menItems });
}


async function showWomenPage(req, res){
    const womenItems = await productService.getwomenProducts();
    const username = req.session.username;
    res.render("women.ejs",   { username, womenItems });
}

function showBranchesPage(req, res){
    res.render("branches.ejs");
}

function showlogin(req, res){ 
    res.render("login.ejs");
}

function showsignup(req, res){ 
    res.render("signUp.ejs");
}

//**********************************************************************************//



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


function showGraph(req, res){
    const graph = graphModels.getData();
    res.render("graph.ejs",   { graph });
 // res.render("graph.ejs");

}




module.exports = {showHomePage, showMenPage, showBranchesPage, showsignup, showlogin, showWomenPage, showcart, showGraph};

