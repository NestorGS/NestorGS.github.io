document.getElementById('utilityForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const monthlySalary = parseFloat(document.getElementById('monthlySalary').value);
    const yearsWorked = parseFloat(document.getElementById('yearsWorked').value);

    if (isNaN(monthlySalary) || isNaN(yearsWorked) || monthlySalary <= 0 || yearsWorked < 0) {
        document.getElementById('utilityResult').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }

    let percentage;

    if (yearsWorked < 1) {
        percentage = 0.05;
    } else if (yearsWorked >= 1 && yearsWorked < 2) {
        percentage = 0.07;
    } else if (yearsWorked >= 2 && yearsWorked < 5) {
        percentage = 0.10;
    } else if (yearsWorked >= 5 && yearsWorked < 10) {
        percentage = 0.15;
    } else {
        percentage = 0.20;
    }

    const utility = monthlySalary * percentage;

    document.getElementById('utilityResult').innerHTML = `
        <p>Porcentaje de utilidad: <strong>${(percentage * 100).toFixed(0)}%</strong></p>
        <p><strong>Utilidad anual: $${utility.toFixed(2)}</strong></p>
    `;
});
