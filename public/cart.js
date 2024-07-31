// Function to get the cart from local storage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Function to save the cart to local storage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to handle the "Add to Cart" button click
function handleAddToCart(event) {
    // Check if the clicked element is a button
    if (event.target && event.target.classList.contains('add-to-cart-btn')) {
        // Find the parent article element to get product details
        const article = event.target.closest('article');
        const productName = article.querySelector('h3').textContent;
        const productPrice = article.querySelector('p').textContent;
        const productImage = article.querySelector('img').src;

        // Create a product object
        const product = {
            name: productName,
            price: productPrice,
            image: productImage
        };

        // Add the product to the cart
        let cart = getCart();
        cart.push(product);
        saveCart(cart);
    }
}

// Attach the event listener to the document to handle clicks on "Add to Cart" buttons
document.addEventListener('click', handleAddToCart);



function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cart = getCart();

    let total = 0;

    // Clear existing items
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);

        const priceText = item.price.replace(/[^0-9.-]+/g, ""); // Remove non-numeric characters
        const price = parseFloat(priceText);
        

        if (!isNaN(price)) {
            total += price;
        }
       
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Run the displayCart function when the page loads
document.addEventListener('DOMContentLoaded', displayCart);


function clearCart() {
    localStorage.removeItem('cart');
    displayCart();  // Update the cart display
}

/* Function to handle the "Buy" button click !!!!!!!!!!!!!!!!!!!!!!!!!!NO SAVING!!!!!!!!!!!!!!!!!!!!!!!!!!!
function handleBuyButtonClick() {
    // Perform any necessary actions (e.g., complete purchase)
    alert('Thank you for your purchase!');
    
    // Clear the cart
    clearCart();
}*/





// Function to handle the "Buy" button click
function handleBuyButtonClick() {
    // Perform any necessary actions (e.g., complete purchase)
    alert('Thank you for your purchase!');
    
    // Prepare purchase data
    const cart = getCart();
    const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace(/[^0-9.-]+/g, "")), 0);
    const purchaseData = {
        items: cart,
        total: total
    };

    // Send purchase data to the server
    fetch('/allPurchases', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(purchaseData),
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Clear the cart after saving purchase
        clearCart();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


// Attach the event listener to the "Buy" button
document.getElementById('btn-buy').addEventListener('click', handleBuyButtonClick);