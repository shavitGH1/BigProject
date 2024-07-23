//Navigation through the pages of the men page

const express = require('express'); //import express from 'express'
const router = express.Router(); //Imports from Express the the router functions


const menController = require('../controllers/men');

router.route("/man").get(menController.getManItem); //route in menPage

module.exports = router; //Exports all routes