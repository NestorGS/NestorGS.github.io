document.getElementById('commissionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const baseSalary = parseFloat(document.getElementById('baseSalary').value);
    const sales1 = parseFloat(document.getElementById('sales1').value);
    const sales2 = parseFloat(document.getElementById('sales2').value);
    const sales3 = parseFloat(document.getElementById('sales3').value);

    if (isNaN(baseSalary) || isNaN(sales1) || isNaN(sales2) || isNaN(sales3)) {
        document.getElementById('commissionResult').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }

    const commissionRate = 0.10;
    const commission = (sales1 + sales2 + sales3) * commissionRate;
    const totalSalary = baseSalary + commission;

    document.getElementById('commissionResult').innerHTML = `
        <p>Comisión total: <strong>$${commission.toFixed(2)}</strong></p>
        <p>Sueldo total: <strong>$${totalSalary.toFixed(2)}</strong></p>
    `;
});
