//Handles requests that come from the branches's page


function showBranchesPage(req, res){  //Shows the branches page
    res.render("branches.ejs");
}

//Exports all function
module.exports = {showBranchesPage};