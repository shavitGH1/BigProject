// Mock data for products
const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'images/brad.jpeg', description: 'This is the first product' },
    { id: 2, name: 'Product 2', price: 19.99, image: 'images/chris.jpg', description: 'This is the second product' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'images/Qb.jpg', description: 'This is the third product' },
    { id: 4, name: 'Product 4', price: 49.99, image: 'images/tom.jpg', description: 'This is the fourth product' }
];

// Function to display products on the page
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productItem.appendChild(productImage);

        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productItem.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
        productItem.appendChild(productPrice);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productItem.appendChild(productDescription);

        // Create a button for each product
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.classList.add('add-to-cart-btn');
        // Example of adding an event listener to the button
        addButton.addEventListener('click', () => {
            addToCart(product); // Example function to handle adding to cart
        });
        productItem.appendChild(addButton);

        productList.appendChild(productItem);
    });
}

// Example function to handle adding a product to the cart
function addToCart(product) {
    console.log(`Added ${product.name} to cart!`);
    // Add your logic here to actually add the product to the cart
}

// Display products when the page loads
displayProducts();
