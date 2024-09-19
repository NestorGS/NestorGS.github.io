document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();
    
    if (isNaN(birthDate.getTime())) {
        document.getElementById('ageResult').innerText = 'Por favor, ingrese una fecha de nacimiento válida.';
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('ageResult').innerHTML = `
        <p>Tienes <strong>${age}</strong> años.</p>
    `;
});
