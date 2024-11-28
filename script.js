document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de entrada
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);

    // Calcular el IMC
    const imc = peso / (estatura * estatura);
    let categoria = '';
    let color = '';

    // Determinar la categoría y asignar color
    if (imc < 18.5) {
        categoria = 'Bajo peso';
        color = '#87CEEB'; // Azul claro
    } else if (imc < 24.9) {
        categoria = 'Normal';
        color = '#32CD32'; // Verde
    } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
        color = '#FFD700'; // Amarillo
    } else if (imc < 34.9) {
        categoria = 'Obesidad I';
        color = '#FFA500'; // Naranja
    } else if (imc < 39.9) {
        categoria = 'Obesidad II';
        color = '#FF4500'; // Naranja oscuro
    } else {
        categoria = 'Obesidad III';
        color = '#FF0000'; // Rojo
    }

    // Mostrar el resultado con el color
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `Tu IMC es: ${imc.toFixed(2)} (${categoria})`;
    resultadoDiv.style.backgroundColor = color;
    resultadoDiv.style.color = 'white'; // Contraste para mejor legibilidad
});

