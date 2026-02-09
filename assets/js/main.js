// Función para actualizar el badge en cualquier página
function actualizarBadge() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const badge = $("#cart-count");
    
    if (badge.length > 0) {
        badge.text(carrito.length);
    }
}

// Función global para cargar Header y Footer
function cargarComponentes(paginaActiva) {
    // Carga el Header
    $("#header-placeholder").load("header.html", function() {
        actualizarBadge();
        
        // Marca la página actual en el menú
        if (paginaActiva) {
            $(".nav li").removeClass("active");
            $(`.nav li a[href="${paginaActiva}"]`).parent().addClass("active");
        }
    });

    // Carga el Footer
    $("#footer-placeholder").load("footer.html");
}