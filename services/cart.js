// const Cart = require('../models/Cart');
// const Product = require('../models/Products');
// const Order = require('../models/Order');
// const mongoose = require('mongoose');

// async function showCart(userId) {
//     try {
//       // Find the cart for the user and populate the product details
//     //   const objectId = new mongoose.Types.ObjectId(userId);

//       const cart = await Cart.findOne({ _id: userId }).populate(`products._id`);
//       if (!cart) {
//         return { message: 'Cart is empty', products: [] };
//       }
  
      

//     const detailedProducts = await Promise.all(cart.products.map(async (item) => {
//         const product = await Product.findOne({_id:item.productId});
//         console.log('product', product)
//         return {
//           product,
//           quantity: item.quantity
//         };
//       }));
      

//       return { message: 'Cart details', products: detailedProducts };
//     } catch (error) {
//       throw new Error('Error fetching cart details: ' + error.message);
//     }
//   }

// async function AddtoCart(userId, productId) {
//     try {
//         // Validate userId and productId
//         // if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(productId)) {
//         // throw new Error('Invalid user ID or product ID format');
//         // }

//         // const userObjectId =new mongoose.Types.ObjectId(userId);
//         // console.log(userId)
//         // console.log(productId)
//         const productObjectId = new mongoose.Types.ObjectId(productId);

//         // Find the cart for the user
//         let cart = await Cart.findOne({ _id:userId });
//         if (cart) {
//         const productIndex = cart.products.findIndex(p => p.productId.toString() === productObjectId.toString());
//         if (productIndex > -1) {
//             cart.products[productIndex].quantity += 1;
//         } else {
//             cart.products.push({ productId: productObjectId, quantity: 1 });
//         }
//         } else {
//         cart = new Cart({ _id: userId, products: [{ productId: productObjectId, quantity: 1 }] });
//         console.log(cart)
//         }

//         const savedCart = await cart.save();
//         return savedCart;
//     } catch (error) {
//         throw new Error('Error adding product to cart: ' + error.message);
//     }
// }
  
  

// async function removeFromCart(userId, productId) {
//   try {
//     const productObjectId = new mongoose.Types.ObjectId(productId);
//     const cart = await Cart.findOne({ _id: userId });
//     console.log(cart)
//     if (cart) {
//       cart.products = await cart.products.filter(p => p.productId.toString() !== productObjectId.toString());
//       await cart.save();
//     }

//     return cart;
//   } catch (error) {
//     throw new Error('Error removing product from cart: ' + error.message);    
//   }
// }


// // async function removeFromCart(userId, productId) {
// //   try {
// //     const cart = await Cart.findOne({ userId });

// //     if (cart) {
// //       cart.products = cart.products.filter(p => p.productId.toString() !== productId);
// //       await cart.save();
// //     }

// //     return cart;
// //   } catch (error) {
// //     throw new Error('Error removing product from cart: ' + error.message);
// //   }
// // }

// async function placeOrder(userId) {
//   try {
//     const cart = await Cart.findOne({ userId }).populate('products.productId');
//     if (!cart) {
//       throw new Error('Cart is empty');
//     }

//     const products = cart.products.map(p => ({
//       productId: p.productId._id,
//       quantity: p.quantity
//     }));

//     const totalAmount = cart.products.reduce((sum, p) => sum + p.productId.price * p.quantity, 0);

//     const order = new Order({ userId, products, totalAmount });

//     await order.save();
//     await Cart.findOneAndDelete({ userId });

//     return order;
//   } catch (error) {
//     throw new Error('Error placing order: ' + error.message);
//   }
// }

// module.exports = {
//   showCart,
//   AddtoCart,
//   removeFromCart,
//   placeOrder
// };


const Purchases = require("../models/Cart");

async function updatePurchases(_id, items, total, timestamp) {
    const updatepurchases = await Purchases.findOneAndUpdate(
        {_id},
        { items, total, gender, timestamp},
      );
    return updatepurchases.name
}

const getPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.find(); // Fetch all purchases
       // res.render('purchases', { purchases });
       return purchases;

    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching purchases');
    }
};

module.exports = {  getPurchases,
                    updatePurchases
}
