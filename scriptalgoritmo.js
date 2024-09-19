document.getElementById('gradeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const partial1 = parseFloat(document.getElementById('partial1').value);
    const partial2 = parseFloat(document.getElementById('partial2').value);
    const partial3 = parseFloat(document.getElementById('partial3').value);
    const finalExam = parseFloat(document.getElementById('finalExam').value);
    const finalWork = parseFloat(document.getElementById('finalWork').value);

    if ([partial1, partial2, partial3, finalExam, finalWork].some(isNaN)) {
        document.getElementById('gradeResult').innerText = 'Por favor, ingrese todas las calificaciones correctamente.';
        return;
    }

    const averagePartial = (partial1 + partial2 + partial3) / 3;
    const finalGrade = (averagePartial * 0.55) + (finalExam * 0.30) + (finalWork * 0.15);

    document.getElementById('gradeResult').innerHTML = `
        <p>Promedio de parciales: <strong>${averagePartial.toFixed(2)}</strong></p>
        <p>Calificación final: <strong>${finalGrade.toFixed(2)}</strong></p>
    `;
});
