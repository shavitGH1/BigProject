//import express from 'express';
const express = require ('express'); //loading libery"express"

const home = require('./routes/page'); //import a module located at ./routes/page.
const men = require('./routes/men'); //import a module located at ./routes/men.
const women = require('./routes/women'); //import a module located at ./routes/women.


const app = express(); //creating the server using express


app.use(express.static('public')); //using static files

//Link between router folder and server
app.use(home); 
app.use(men);
app.use(women);

app.listen(80);
// lmb4200: C:\Users\ASUS> cd C:\Users\ASUS\Desktop\web app\login
// 
// C:\Users\ASUS\Desktop\web app\login> cd git clone https://github.com/ofirzvishaboo/web_database.git
// The filename, directory name, or volume label syntax is incorrect.
// 
// C:\Users\ASUS\Desktop\web app\login>



