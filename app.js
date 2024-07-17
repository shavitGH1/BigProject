//import express from 'express';
const express = require ('express'); //loading libery"express"

const home = require('./routes/page');

const app = express(); //creating the server using express


app.use(express.static('public')); //using static files

app.use(home);

app.listen(80);
