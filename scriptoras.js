document.getElementById('extraHoursForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const hourlyWage = parseFloat(document.getElementById('hourlyWage').value);
    const totalHours = parseFloat(document.getElementById('totalHours').value);

    if (isNaN(hourlyWage) || isNaN(totalHours) || hourlyWage <= 0 || totalHours <= 0) {
        document.getElementById('extraPayResult').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }

    let normalHours = Math.min(totalHours, 40);
    let extraHours = Math.max(totalHours - 40, 0);
    let extraHoursPay = 0;

    if (extraHours > 0) {
        let doubleHours = Math.min(extraHours, 8);
        let tripleHours = Math.max(extraHours - 8, 0);
        extraHoursPay = (doubleHours * hourlyWage * 2) + (tripleHours * hourlyWage * 3);
    }

    const normalPay = normalHours * hourlyWage;
    const totalPay = normalPay + extraHoursPay;

    document.getElementById('extraPayResult').innerHTML = `
        <p>Pago por horas normales: <strong>$${normalPay.toFixed(2)}</strong></p>
        <p>Pago por horas extras: <strong>$${extraHoursPay.toFixed(2)}</strong></p>
        <p><strong>Pago total: $${totalPay.toFixed(2)}</strong></p>
    `;
});
