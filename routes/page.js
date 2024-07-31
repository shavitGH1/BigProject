//Navigation through the pages of the home page

const express = require('express');
const router = express.Router();

//////
const womenController = require('../controllers/Product');
const loginController  = require("../controllers/login");
const productsController  = require("../controllers/Product");
//router.route("/allProducts").get(productsController.showProducts);
router.get('/allProducts', loginController.isAdmin, productsController.showProducts);

//////

const homeController = require('../controllers/home');

router.route("/").get(homeController.showHomePage);

// router.get('/men', loginController.isLoggedIn, homeController.showMenPage);
router.route('/man').get(womenController.showMenProductByID)

router.route("/men").get(homeController.showMenPage);
router.route("/women").get(homeController.showWomenPage);

router.route("/logIn").get(homeController.showlogin);

router.route("/signUp").get(homeController.showsignup);

router.route("/branches").get(homeController.showBranchesPage);

router.route("/cart").get(homeController.showcart);

router.route("/graph").get(homeController.showGraph);

router.post('/searchedProducts', productsController.searchProduct);

// Route to handle saving purchases
router.post('/allPurchases', homeController.savePurchase);

// Route to handle fetching and displaying purchases
router.get('/allPurchases', loginController.isAdmin, homeController.getPurchases);
module.exports = router;