document.getElementById('wordForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const wordInput = document.getElementById('wordInput').value;
    const words = wordInput.split(',').map(word => word.trim().toLowerCase());

    const wordToNumberMap = {
        "cero": 0, "uno": 1, "dos": 2, "tres": 3, "cuatro": 4, 
        "cinco": 5, "seis": 6, "siete": 7, "ocho": 8, "nueve": 9
    };

    const result = words.map(word => wordToNumberMap[word] !== undefined ? wordToNumberMap[word] : -1);

    document.getElementById('numberResult').innerHTML = `
        <p>Resultado: <strong>${result.join(', ')}</strong></p>
    `;
});
