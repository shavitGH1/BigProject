const womenItems = [ // array of products
    {"id": '1', name: 'Product 1- barbur', price: 29.99, image: 'images/women/bar.jpg', description: 'This is the first product' },
    {"id": '2', name: 'Product 2- sweet', price: 19.99, image: 'images/women/kendel.jpg', description: 'This is the second product' },
    {"id": '3', name: 'Product 3-vempire', price: 39.99, image: 'images/women/nina.jpg', description: 'This is the third product' },
    {"id": '4',name: 'Product 4-queen B', price: 49.99, image: 'images/women/Qb.jpg', description: 'This is the fourth product' },
    {"id": '5',name: 'Product 5- tyty', price: 88.99, image: 'images/women/taylorswift.jpg', description: 'This is the fifth product' }
]

function getAllWomensItems(){//A function that returns all products
    return womenItems;
}

function getWomenItem(id){ //A function that returns a specific product
    return womenItems.filter(womenItems => womenItems.id == id)[0];
}

//Exports all function
module.exports = {
     getAllWomensItems,
     getWomenItem
};
