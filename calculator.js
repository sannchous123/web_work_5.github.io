document.addEventListener('DOMContentLoaded', function() {
    console.log('Калькулятор стоимости заказа загружен');
    
    const calculatorForm = document.getElementById('order-calculator');
    const quantityInput = document.getElementById('product-quantity');
    const productSelect = document.getElementById('product-select');
    const resultDiv = document.getElementById('calculation-result');
    
   
    function calculateTotal() {
        const quantity = parseInt(quantityInput.value);
        const price = parseInt(productSelect.value);
        
        if (isNaN(quantity) || quantity < 1 || !price) {
            resultDiv.textContent = 'Пожалуйста, введите корректные данные';
            resultDiv.style.display = 'block';
            return;
        }
        
        const total = quantity * price;
        resultDiv.textContent = `Стоимость заказа: ${total} руб.`;
        resultDiv.style.display = 'block';
    }
    
    
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            calculateTotal();
        });
    }
    
    
    if (quantityInput) {
        quantityInput.addEventListener('input', function() {
            if (productSelect.value) {
                calculateTotal();
            }
        });
    }
    
    if (productSelect) {
        productSelect.addEventListener('change', function() {
            if (quantityInput.value) {
                calculateTotal();
            }
        });
    }
});
