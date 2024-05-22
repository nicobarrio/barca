document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
        scrollingSpeed: 1000, // Velocidad de desplazamiento (en milisegundos)
        scrollBar: true, // Muestra la barra de desplazamiento
        autoScrolling: false, // Deshabilita el desplazamiento automático
        fitToSection: false, // Desactiva el ajuste de altura de las secciones
        normalScrollElements: '#section', // Elementos que pueden desplazarse normalmente
        touchSensitivity: 1, // Sensibilidad táctil para el desplazamiento (valores más bajos significan mayor sensibilidad)
        responsiveWidth: 0, // Desactiva la responsividad basada en el ancho de la ventana
        responsiveHeight: 0, // Desactiva la responsividad basada en la altura de la ventana
    });
});