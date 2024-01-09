document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menuButton');
    var menuLateral = document.querySelector('.menu-lateral');
    var linksEnMenu = document.querySelectorAll('.menu-content a');

    menuButton.addEventListener('click', function () {
        // Toggle la posición del menú lateral
        menuLateral.style.right = (menuLateral.style.right === '0px') ? '-100%' : '0px';
    });

    // Oculta el menú lateral al hacer clic en un enlace dentro del menú
    linksEnMenu.forEach(function (link) {
        link.addEventListener('click', function () {
            menuLateral.style.right = '-100%';
        });
    });

    // Oculta el menú lateral al hacer clic fuera del menú
    document.addEventListener('click', function (event) {
        if (!menuLateral.contains(event.target) && event.target !== menuButton) {
            menuLateral.style.right = '-100%';
        }
    });
});