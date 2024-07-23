//Navigation through the pages of the home page

const express = require('express'); //import express from 'express'
const router = express.Router(); //Imports from Express the the router functions


const homeController = require('../controllers/home'); 

router.route("/").get(homeController.showHomePage); //route to home page

router.route("/men").get(homeController.showMenPage); //route to MenPage

router.route("/women").get(homeController.showWomenPage); //route to WomenPage

router.route("/logIn").get(homeController.showlogin); //route to login page

router.route("/signUp").get(homeController.showsignup); //route to signUp page

router.route("/branches").get(homeController.showBranchesPage); //route to branches page

router.route("/cart").get(homeController.showcart); //route to cart page

module.exports = router; //Exports all routes