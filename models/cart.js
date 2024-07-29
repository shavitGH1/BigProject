const mongoose = require('mongoose');

// Cart schema connected to the user schema,
// contains products that are connected to the Products schema
const cartSchema = new mongoose.Schema({
    
    _id: {
        type: String,
        ref: 'User',
        required: true,
    },

    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        }

    }],
});

module.exports = mongoose.model('Cart', cartSchema);
