const form = document.getElementById('htmlFilterForm');
const cleanHtmlDiv = document.getElementById('cleanHtml');
const htmlError = document.getElementById('htmlError');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const htmlInput = document.getElementById('htmlInput').value.trim();

    if (htmlInput === '') {
        htmlError.textContent = 'Por favor, introduce algo de código HTML.';
        htmlError.style.display = 'block';
        cleanHtmlDiv.innerHTML = '';
        return;
    }

    htmlError.style.display = 'none';

    // Expresión regular para eliminar etiquetas <script> y su contenido
    const cleanHtml = htmlInput.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, '');

    // Mostrar el HTML limpio en el div de resultados
    cleanHtmlDiv.textContent = cleanHtml;
});
