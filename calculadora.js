document.addEventListener("DOMContentLoaded", function () {
    const talles = [
        { circunferencia: 49.3, talle: 5 },
        { circunferencia: 50.6, talle: 5.5 },
        { circunferencia: 51.9, talle: 6 },
        { circunferencia: 53.2, talle: 6.5 },
        { circunferencia: 54.5, talle: 7 },
        { circunferencia: 55.8, talle: 7.5 },
        { circunferencia: 57.2, talle: 8 },
        { circunferencia: 58.2, talle: 8.5 },
        { circunferencia: 59.4, talle: 9 },
        { circunferencia: 61.0, talle: 10 },
        { circunferencia: 63.5, talle: 10.5 },
        { circunferencia: 65.0, talle: 11 },
        { circunferencia: 66.2, talle: 11.5 },
        { circunferencia: 67.5, talle: 12 },
        { circunferencia: 68.8, talle: 12.5 },
        { circunferencia: 70.2, talle: 13 },
    ];

    document.getElementById("calcularTalle").addEventListener("click", function () {
        const circunferencia = parseFloat(document.getElementById("circunferencia").value);
        const resultado = document.getElementById("resultadoTalle");

        if (isNaN(circunferencia)) {
            resultado.textContent = "Por favor, ingresa un valor válido.";
            return;
        }

        // Encuentra el talle más cercano hacia arriba
        const talleEncontrado = talles.find(
            (talle) => circunferencia <= talle.circunferencia
        );

        if (talleEncontrado) {
            resultado.textContent = `El talle ${talleEncontrado.talle} es el que más se aproxima a la medida de tu dedo.`;
        } else {
            // Si la circunferencia es mayor a todas, devuelve el talle más grande
            const talleMaximo = talles[talles.length - 1];
            resultado.textContent = `El talle ${talleMaximo.talle} es el más grande disponible para la medida de tu dedo.`;
        }
    });
});
