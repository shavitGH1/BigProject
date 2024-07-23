const womenModels = require ('../models/women')


function showWomenPage(req, res){
    const womenItems = womenModels.getAllWomensItems();
    res.render("women.ejs",   { womenItems });
}




module.exports = {
    showWomenPage
};