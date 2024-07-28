const express = require('express');
const router = express.Router();

router.get('/men', (req, res) => {
    res.render('men'); // Ensure you have a men.ejs file in the views directory
});

module.exports = router;
