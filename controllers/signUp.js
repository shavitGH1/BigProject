//Handles requests that come from the cart's page


function showsignup(req, res){ 
    res.render("signUp.ejs");
}

//Exports all function
module.exports = {showsignup};

