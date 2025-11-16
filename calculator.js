document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    const productSelect = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    const totalCostElement = document.getElementById('total-cost');
    const selectedProductInfo = document.getElementById('selected-product-info');
    const quantityInfo = document.getElementById('quantity-info');
    const quantityError = document.getElementById('quantity-error');
    
    const prices = {
        '1': 25000,
        '2': 65000,
        '3': 8500
    };
    
    const productNames = {
        '1': "Смартфон",
        '2': "Ноутбук",
        '3': "Наушники"
    };
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            productCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            productSelect.value = this.getAttribute('data-value');
        });
    });
    
    productCards[0].classList.add('selected');
    productSelect.value = '1';
    
    quantityInput.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (isNaN(value) || value < 1) {
            quantityError.style.display = 'block';
        } else {
            quantityError.style.display = 'none';
        }
    });
    
    calculateButton.addEventListener('click', function() {
        const selectedProduct = productSelect.value;
        const quantity = parseInt(quantityInput.value);
        
        if (isNaN(quantity) || quantity < 1) {
            quantityError.style.display = 'block';
            return;
        }
        
        const price = prices[selectedProduct];
        const totalCost = price * quantity;
        const formattedCost = totalCost.toLocaleString('ru-RU');
        
        totalCostElement.textContent = `${formattedCost} руб.`;
        selectedProductInfo.textContent = `Товар: ${productNames[selectedProduct]}`;
        quantityInfo.textContent = `Количество: ${quantity}`;
        
        resultDiv.style.display = 'block';
    });
});
