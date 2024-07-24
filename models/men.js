
const menItems = [ // array of products
    {"id": '1', name: 'Product 1', price: 29.99, image: 'images/men/007.jpg', description: 'This is the first product' },
    {"id": '2', name: 'Product 2', price: 19.99, image: 'images/men/tomh.jpg', description: 'This is the second product' },
    {"id": '3', name: 'Product 3', price: 39.99, image: 'images/men/ryan.jpg', description: 'This is the third product' },
    {"id": '4',name: 'Product 4', price: 49.99, image: 'images/men/harry.jpg', description: 'This is the fourth product' },
    {"id": '5',name: 'Product 5', price: 88.99, image: 'images/men/tom.jpg', description: 'This is the fifth product' }
]

function getAllMensItems(){//A function that returns all products
    return menItems;
}

function getManItem(id){ //A function that returns a specific product
    return menItems.filter(menItems => menItems.id == id)[0];
}

//Exports all function
module.exports = {
    getAllMensItems,
    getManItem
};
