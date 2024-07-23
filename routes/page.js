//Navigation through the pages of the home page

const express = require('express');
const router = express.Router();


const homeController = require('../controllers/home');

router.route("/").get(homeController.showHomePage);

router.route("/men").get(homeController.showMenPage);

router.route("/women").get(homeController.showWomenPage);

router.route("/logIn").get(homeController.showlogin);

router.route("/signUp").get(homeController.showsignup);

router.route("/branches").get(homeController.showBranchesPage);

module.exports = router;