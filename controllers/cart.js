// const cartService = require("../services/cart");

// function isLoggedIn(req, res, next) {
//   if (req.session.username != null)
//     return next();
//   else
//     res.redirect('/login');
// }

// async function showCart(req, res) {
//   try {
//     const cartDetails = await cartService.showCart(req.session.username);
//     console.log(cartDetails)
//     res.render('cart', { username: req.session.username, cart: cartDetails });
//   } catch (err) {
//   // {console.log("hello");
//     res.status(500).send(err.message);
//   }
// }

// async function addToCart(req, res) {
//   try {
//     const { productId } = req.body;
//     const savedCart = await cartService.AddtoCart(req.session.username, productId);
//     console.log(savedCart)
//     const cartDetails = await cartService.showCart(req.session.username);
//     res.render('cart', { username: req.session.username, cart: cartDetails });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// }

// async function removeFromCart(req, res) {
//   try {
//     const username = req.session.username ;
//     const { productId } = req.body;
//     const updatedCart = await cartService.removeFromCart(username, productId);q
//     res.render('cart', { username: req.session.username, cart: updatedCart });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// }

// async function placeOrder(req, res) {
//   try {
//     const order = await cartService.placeOrder(req.user._id);
//     res.redirect('/orders');
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// }

// module.exports = {
//   showCart,
//   isLoggedIn,
//   addToCart,
//   removeFromCart,
//   placeOrder
// };


const cartService = require("../services/cart");

function isLoggedIn(req, res, next) {
  if (req.session.username != null)
    return next();
  else
    res.redirect('/login');
}

async function showCart(req, res) {
  try {
    const cartDetails = await cartService.showCart(req.session.username);
    console.log(cartDetails)
    res.render('cart', { username: req.session.username, cart: cartDetails });
  } catch (err) {
  // {console.log("hello");
    res.status(500).send(err.message);
  }
}

async function addToCart(req, res) {
  try {
    const { productId } = req.body;
    const savedCart = await cartService.AddtoCart(req.session.username, productId);
    console.log(savedCart)
    const cartDetails = await cartService.showCart(req.session.username);
    res.render('cart', { username: req.session.username, cart: cartDetails });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function removeFromCart(req, res) {
  try {
    const username = req.session.username ;
    const { productId } = req.body;
    const updatedCart = await cartService.removeFromCart(username, productId);q
    res.render('cart', { username: req.session.username, cart: updatedCart });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function placeOrder(req, res) {
  try {
    const order = await cartService.placeOrder(req.user._id);
    res.redirect('/orders');
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  showCart,
  isLoggedIn,
  addToCart,
  removeFromCart,
  placeOrder
};
