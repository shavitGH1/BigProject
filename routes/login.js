const express = require("express");
const router = express.Router();

const loginController  = require("../controllers/login");

router.get("/login", loginController.loginForm);
router.get("/register", loginController.registerForm);
router.post("/register", loginController.register);
router.post("/login", loginController.login);
router.get('/logout',loginController.logout);
router.get('/', loginController.isLoggedIn, loginController.foo);
router.get('/users', loginController.isAdmin, loginController.showUsers);
router.post('/users', loginController.isAdmin, loginController.addUsers);
router.post('/users/search', loginController.isAdmin, loginController.searchUsers);
router.post('/users/:username', loginController.isAdmin, loginController.delUser);



module.exports = router;
