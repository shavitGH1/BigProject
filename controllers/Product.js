const productService = require("../services/products")

function isLoggedIn(req, res, next) {
  if (req.session.username != null)
    return next()
  else
    res.redirect('/login')
}

async function showProducts(req, res) {
  const allProducts = await productService.getProducts();
  console.log(allProducts)
  res.render('allProducts', { username: req.session.username, allProducts })
}

async function addProduct(req, res) {
  const { name, description, gender, company, size, price, image } = req.body
  const addProd = await productService.addProduct(name, description, gender, company, size, price, image);
  if (addProd) {
    res.redirect('/products');
  } else {
    res.status(400).send("Failed to add product");
  }
};

async function delProd(req, res) {
  if (req.query._method === 'DELETE') {
    const { name } = req.params;
    const deletedProduct = await productService.deleteProduct(name);
    if (deletedProduct) {
      res.redirect("/products");
    } else {
      res.status(400).send("Failed to delete product");
    }
  } else {
    res.status(400).send("Invalid request");
  }
}

async function showProduct(req, res) {
  const { name } = req.params;
  const product = await productService.getProduct(name)
  res.render('Product', { username: req.session.username, product })
}

//////////////////////////////
async function showProductByID(req, res) {
  //const { _id } = req.params;
  const productId = req.query.name;
  console.log(productId)
  const product = await productService.getProductByID(productId)
  console.log(product)
  const username = req.session.username
  if(product == undefined)
    res.status(404).send("can't find item");
else
    res.render("woman.ejs", { username, product});
}

//////////////////////////////
async function updateProd(req, res) {
  const { _id, name, description, gender, company, size, price, image } = req.body
  const updatedProd = await productService.updateProduct(_id, name, description, gender, company, size, price, image);
  if (updatedProd) {
    res.redirect(`/products`);
  } else {
    res.status(400).send("Failed to add product");
  }
}

async function searchProducts(req, res) {
  const { company, gender, name } = req.body;

  let query = {};

    if (company) {
        query.company = company;
    }
    if (gender) {
        query.gender = gender;
    }
    if (name) {
      query.name = { $regex: `^${name}`, $options: 'i' }
    }

  try {
    const allProducts = await productService.searchProd(query)
    res.render('allProducts', { allProducts, username: req.session.username });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

async function searchProduct(req, res) {
  const { company, gender, name } = req.body;
 
   let query = {};
 
     if (company) {
         query.company = company;
     }
     if (gender) {
         query.gender = gender;
     }
     if (name) {
       query.name = { $regex: `^${name}`, $options: 'i' }
     }
 
   try {
     const allProducts = await productService.searchProd(query)
     res.render('searchedProducts', { allProducts, username: req.session.username });
   } catch (error) {
     res.status(500).send(error.message);
   }
 };
 


module.exports = {
  showProducts,
  isLoggedIn,
  addProduct,
  delProd,
  showProduct,
  updateProd,
  searchProducts,
  showProductByID,
  searchProduct
}