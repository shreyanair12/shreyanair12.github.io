let total = 0;

document.querySelectorAll('.to-order').forEach(button => {
    button.addEventListener('click', function () {
        
        const food = this.getAttribute('data-food');
        const price = parseFloat(this.getAttribute('data-price'));
        
        const quantityInput = this.previousElementSibling;
        const quantity = parseInt(quantityInput.value, 10);

        if (isNaN(quantity) || quantity < 1) {
            alert('please enter a valid amount.');
            return;  
        }

        const itemTotal = price * quantity;

        const cartItems = document.getElementById('cart-items');
        const newItem = document.createElement('li');
        newItem.textContent = `${food} x${quantity} - $${itemTotal.toFixed(2)}`;
        cartItems.appendChild(newItem);

        total += itemTotal;

        const totalElement = document.getElementById('total');
        totalElement.textContent = total.toFixed(2);
    });
});