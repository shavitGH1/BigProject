//Navigation through the pages of the women page

const express = require('express'); //import express from 'express'
const router = express.Router(); //Imports from Express the the router functions


const womenController = require('../controllers/women');

router.route("/woman").get(womenController.getWomanItem); //route in WomenPage

module.exports = router; //Exports all routes