
const express = require('express');
const router = express.Router();


const homeController = require('../controllers/home');
router.route("/").get(homeController.showHomePage);

const menController = require('../controllers/men');
router.route("/men").get(menController.showMenPage);

const loginController = require('../controllers/logIn');
router.route("/logIn").get(loginController.showlogin);

const signipController = require('../controllers/signUp');
router.route("/signUp").get(signipController.showsignup);

const branchesController = require('../controllers/branches');
router.route("/branches").get(branchesController.showBranchesPage);

const womenController = require('../controllers/women');
router.route("/women").get(womenController.showWomenPage);

module.exports = router;