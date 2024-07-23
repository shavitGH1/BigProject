//Handles requests that come from the women's page

const womenModels = require ('../models/women')



function showWomenPage(req, res){
    const womenItems = womenModels.getAllWomensItems();
    res.render("women.ejs",   { womenItems });
}

function getWomanItem(req, res){
    const womanItemId = req.query.id;
    const womanItem = womenModels.getWomenItem(womanItemId);
    if(womanItem == undefined)
        res.status(404).send("can't find item");
    else
        res.render("woman.ejs", {womanItem});
}

//Exports all function
module.exports = {
    showWomenPage,
    getWomanItem
};