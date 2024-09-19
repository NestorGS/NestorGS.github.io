document.getElementById('discountForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const purchaseAmount = parseFloat(document.getElementById('purchaseAmount').value);
    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
        document.getElementById('discountResult').innerText = 'Por favor, ingrese un valor válido para la compra.';
        return;
    }

    const discountRate = 0.15;
    const discount = purchaseAmount * discountRate;
    const totalToPay = purchaseAmount - discount;

    document.getElementById('discountResult').innerHTML = `
        <p>Descuento: <strong>$${discount.toFixed(2)}</strong></p>
        <p>Total a pagar: <strong>$${totalToPay.toFixed(2)}</strong></p>
    `;
});
