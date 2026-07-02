function verificarRespuesta(opcion) {
    if (opcion === 'B') {
        alert("¡Correcto! 🎉 La pantalla LCD sirve para mostrar texto.");
    } else {
        alert("Incorrecto ❌ ¡Sigue intentando!");
    }
}

// Lógica básica para el botón de música
const btnMusica = document.getElementById('btn-musica');
let sonando = false;

btnMusica.addEventListener('click', () => {
    if (!sonando) {
        btnMusica.innerText = "⏸️ Pausar Música";
        sonando = true;
        // Aquí se puede agregar un objeto Audio en el futuro
    } else {
        btnMusica.innerText = "🎵 Reproducir Música";
        sonando = false;
    }
});
