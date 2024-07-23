const cartItems = [ // array of cart
    {"id": '1', name: 'Product 1', price: 29.99, image: 'images/men/007.jpg', description: 'This is the first product' },
    {"id": '2', name: 'Product 2', price: 19.99, image: 'images/men/brad.jpeg', description: 'This is the second product' },
    {"id": '3', name: 'Product 3', price: 39.99, image: 'images/men/chris.jpg', description: 'This is the third product' }
]

function getCart(){//A function that returns all products
    return cartItems;
}


//Exports all function
module.exports = {
        getCart
};