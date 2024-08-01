

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
    if (event.target && event.target.classList.contains('add-to-cart-btn')) {
        const article = event.target.closest('article');
        const productName = article.querySelector('h3').textContent;
        const productPrice = article.querySelector('p').textContent;
        const productImage = article.querySelector('img').src;

        const product = {
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = getCart();
        cart.push(product);
        saveCart(cart);
    }
}

// Function to handle the "Remove" button click
function handleRemoveFromCart(event) {
    if (event.target && event.target.classList.contains('remove-item-btn')) {
        const index = event.target.getAttribute('data-index');
        let cart = getCart();
        cart.splice(index, 1);
        saveCart(cart);
        displayCart();
    }
}

// Function to display the cart
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cart = getCart();

    let total = 0;
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            </div>
            <button class="remove-item-btn" data-index="${index}">Remove</button>
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

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

// Function to handle the "Buy" button click
function handleBuyButtonClick() {
    alert('Thank you for your purchase!');
    const cart = getCart();
    const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace(/[^0-9.-]+/g, "")), 0);
    const purchaseData = {
        items: cart,
        total: total
    };

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
        clearCart();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Attach event listeners
document.addEventListener('click', handleAddToCart);
document.addEventListener('click', handleRemoveFromCart);
document.addEventListener('DOMContentLoaded', displayCart);
document.getElementById('btn-buy').addEventListener('click', handleBuyButtonClick);
