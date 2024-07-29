const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');
const { isLoggedIn } = require('../controllers/cart');

router.get('/', isLoggedIn, cartController.showCart);
// router.post('/add', isLoggedIn, cartController.addToCart);
router.post('/add', isLoggedIn, cartController.addToCart);
router.post('/remove', isLoggedIn, cartController.removeFromCart);
router.post('/checkout', isLoggedIn, cartController.placeOrder);

module.exports = router;
