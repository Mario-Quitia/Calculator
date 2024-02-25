document.addEventListener("DOMContentLoaded", function() {
    // Oculta el overlay y muestra el loader después de 5 segundos
    setTimeout(function() {
        var overlay = document.querySelector(".overlay");
        overlay.style.display = "none";
    }, 5000);
});
