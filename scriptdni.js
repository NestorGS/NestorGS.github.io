document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let dniNumber = document.getElementById('dniNumber').value;
    let dniLetters = document.getElementById('dniLetter').value.toUpperCase().split(''); // Convierte la entrada a un array de letras

    let resultMessage = document.getElementById('resultMessage');
    let formContainer = document.getElementById('formContainer');

    // Limpia clases previas
    formContainer.classList.remove('valid', 'invalid');

    // Validación del número de DNI
    if (dniNumber < 0 || dniNumber > 99999999 || isNaN(dniNumber)) {
        resultMessage.textContent = 'El número de DNI proporcionado no es válido.';
        resultMessage.style.color = 'red';
        formContainer.classList.add('invalid');
        return;
    }

    // Cálculo de la letra
    let calculatedLetter = letras[dniNumber % 23];

    // Comparación de la letra calculada con las ingresadas
    if (dniLetters.includes(calculatedLetter)) {
        resultMessage.textContent = 'El número y la letra del DNI son correctos.';
        resultMessage.style.color = 'green';
        formContainer.classList.add('valid'); // Indica que el DNI es válido
    } else {
        resultMessage.textContent = 'Ninguna de las letras proporcionadas es correcta.';
        resultMessage.style.color = 'red';
        formContainer.classList.add('invalid'); // Indica que el DNI no es válido
    }
});
