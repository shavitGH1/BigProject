const Products = require("../models/Products");

async function addProduct(name, description, gender, company, price, image) {

    const product = new Products({
        name,
        description,
        gender,
        company,
        size,
        price,
        image
    });

    const savingProduct = await product.save()
    return savingProduct
}

async function updateProduct(_id, name, description, gender, company, size, price, image) {
    const updatedProduct = await Products.findOneAndUpdate(
        {_id},
        { name, description, gender, company, size, price, image },
      );
    return updatedProduct.name
}

async function getProducts() {
    const allProducts = await Products.find();
    return allProducts
}

async function getMenProducts() {
    const menProducts = await Products.find({ gender: { $in: ['men', 'unisex'] } });
    return menProducts
}
async function getwomenProducts() {
    const womenProducts = await Products.find({ gender: { $in: ['women', 'unisex'] } });
    return womenProducts
}


async function getProduct(name) {
    const product = await Products.findOne({name})
    return product
}
/////////////////
async function getProductByID(id) {
    const product = await Products.findOne({id})
    return product
}
/////////////////
async function deleteProduct(name) {
    const deletedProduct = await Products.deleteOne({ name });
    return deletedProduct != null
}

async function searchProd(query) {
    const products = await Products.find(query);
    return products
}


module.exports = { getProducts, searchProd, deleteProduct, getProduct, addProduct, updateProduct, getMenProducts, getwomenProducts, getProductByID}