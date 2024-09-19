const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    // Validar nombre
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
        nameError.textContent = 'El nombre es obligatorio.';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validar email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Debe ingresar un email válido.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validar comentarios
    const comments = document.getElementById('comments');
    const commentsError = document.getElementById('commentsError');
    if (comments.value.trim().length > 50) {
        commentsError.textContent = 'El comentario no debe exceder los 50 caracteres.';
        commentsError.style.display = 'block';
        isValid = false;
    } else {
        commentsError.style.display = 'none';
    }

    // Validar contraseña
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password.value)) {
        passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un dígito.';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Validar términos
    const terms = document.getElementById('terms');
    const termsError = document.getElementById('termsError');
    if (!terms.checked) {
        termsError.textContent = 'Debe aceptar los términos del servicio.';
        termsError.style.display = 'block';
        isValid = false;
    } else {
        termsError.style.display = 'none';
    }

    // Si todo es válido, mostrar resultado
    if (isValid) {
        document.getElementById('result').innerHTML = `
            <p>Formulario enviado con éxito!</p>
        `;
    }
});
