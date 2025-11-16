document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    const totalCostElement = document.getElementById('total-cost');
    const quantityError = document.getElementById('quantity-error');

    calculateButton.addEventListener('click', function() {
        const price = parseInt(productSelect.value);
        const quantity = parseInt(quantityInput.value);
        
        if (isNaN(quantity) || quantity < 1) {
            quantityError.style.display = 'block';
            resultDiv.style.display = 'none';
            return;
        }
        
        quantityError.style.display = 'none';
        
        const totalCost = price * quantity;
        const formattedCost = totalCost.toLocaleString('ru-RU');
        
        totalCostElement.textContent = formattedCost + ' руб.';
        resultDiv.style.display = 'block';
    });
});
