document.addEventListener('DOMContentLoaded', () => {
    const addToCartForms = document.querySelectorAll('.add-to-cart-form');

    addToCartForms.forEach(form => {
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent the default form submission

            const formData = new FormData(form);
            const productId = formData.get('productId');
            const userId = form.querySelector('.add-to-cart-btn').getAttribute('data-user-id');

            try {
                const response = await fetch('/cart/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ userId, productId })
                });

                if (response.ok) {
                    alert('Product added to cart');
                } else {
                    const error = await response.json();
                    alert('Error adding product to cart: ' + error.message);
                }
            } catch (error) {
                alert('Error adding product to cart: ' + error.message);
            }
        });
    });
});
