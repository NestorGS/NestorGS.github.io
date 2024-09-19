document.getElementById('investmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const capital = parseFloat(document.getElementById('capital').value);
    if (isNaN(capital) || capital <= 0) {
        document.getElementById('result').innerText = 'Por favor, ingrese un valor válido para el capital.';
        return;
    }

    const interestRate = 0.02;
    const gain = capital * interestRate;
    const total = capital + gain;

    document.getElementById('result').innerHTML = `
        <p>Ganancia después de un mes: <strong>$${gain.toFixed(2)}</strong></p>
        <p>Total después de un mes: <strong>$${total.toFixed(2)}</strong></p>
    `;
});
