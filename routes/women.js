//Navigation through the pages of the women page

const express = require('express');
const router = express.Router();


const womenController = require('../controllers/Product');

router.route("/woman").get(womenController.showProductByID);

module.exports = router;