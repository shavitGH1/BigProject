
const menModels = require ('../models/men')


function showMenPage(req, res){
    const menItems = menModels.getAllMensItems();
    res.render("men.ejs",   { menItems });
}

function getManItem(req, res){
    const manItemId = req.query.id;
    const manItem = menModels.getManItem(manItemId);
    if(manItem == undefined)
        res.status(404).send("can't find item");
    else
        res.render('man.ejs', {manItem});
}


module.exports = {
    showMenPage,
    getManItem
};


