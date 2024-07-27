const express = require("express");
const router = express.Router();

const loginController  = require("../controllers/login");
const productsController  = require("../controllers/Product");
const { login } = require("../services/login");



router.get('/allProducts', loginController.isAdmin, productsController.showProducts);


router.get('/', productsController.isLoggedIn, productsController.showProducts);
router.post('/', loginController.isAdmin, productsController.addProduct);

router.post('/:name/delete', loginController.isAdmin, productsController.delProd);
router.post('/:name/update', loginController.isAdmin, productsController.updateProd);

router.get('/:name', loginController.isAdmin, productsController.showProduct);
router.post('/search', productsController.searchProducts);


module.exports = router;
