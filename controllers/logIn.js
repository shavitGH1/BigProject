const loginService = require("../services/login")

function isLoggedIn(req, res, next) {
  if (req.session.username != null)
    return next()
  else
    res.redirect('/login')
}

async function searchUsers(req, res) {
  const { username } = req.body;
  const query = {}
  query._id = { $regex: `^${username}`, $options: 'i' }
  console.log(query)
  try {
    const allUsers = await loginService.searchUsers(query)
    console.log(allUsers)
    res.render('users', { users: allUsers });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

function isAdmin(req, res, next) {
  if (req.session.username == 'admin')
    return next()
  else
    res.redirect('/')
}

function foo(req, res) {
  res.render("foo", {username: req.session.username})
}

async function delUser(req, res) {
  if (req.query._method === 'DELETE') {
    const { username } = req.params;
    const deletedUser = await loginService.deleteUser(username);
    if (deletedUser) {
      res.redirect("/users");
    } else {
      res.status(400).send("Failed to delete user");
    }
  } else {
    res.status(400).send("Invalid request");
  }

};
async function addUsers(req, res) {
    const { username, password } = req.body;
    console.log(password)
    const addUser = await loginService.aAddUser(username, password);
    if (addUser) {
      res.redirect("/users");
    } else {
      res.status(400).send("Failed to add user");
    }
  }

async function showUsers(req, res) {
  const users = await loginService.getUsers()
  res.render('users', { users })
}

function loginForm(req, res) { res.render("login", {}) }

function registerForm(req, res) { res.render("register", {}) }

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/login');
  });
}

async function login(req, res) {
  const { username, password } = req.body

  const result = await loginService.login(username, password)
  if (result) {
    req.session.username = username
    res.redirect('/')
  }
  else
    res.redirect('/login?error=1')
}

async function register(req, res) {
  const { username, password } = req.body


  try {
    await loginService.register(username, password)
    req.session.username = username
    res.redirect('/')
  }
  catch (e) {
    res.redirect('/register?error=1')
  }
}

module.exports = {
  login,
  loginForm,
  register,
  registerForm,
  logout,
  searchUsers,
  foo,
  isLoggedIn,
  isAdmin,
  showUsers,
  delUser,
  addUsers
}