document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menuButton');
    var menu = document.querySelector('.menu');
    var searchBar = document.querySelector('.barra');

    menuButton.addEventListener('click', function () {
        // Toggle la clase 'show-menu' para mostrar u ocultar el menú
        menu.classList.toggle('show-menu');

        // Toggle la clase 'hide-search' para mostrar u ocultar la barra de búsqueda
        searchBar.classList.toggle('hide-search');
    });

    // Agrega un evento de clic para ocultar el menú cuando se hace clic en un enlace dentro del menú
    menu.addEventListener('click', function (event) {
            menu.classList.remove('show-menu');
            searchBar.classList.remove('hide-search');
    });
});