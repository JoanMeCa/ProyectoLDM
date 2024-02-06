document.addEventListener('DOMContentLoaded', function () {
    const mas = document.getElementById('mas');
    const menos = document.getElementById('menos');
    const texto = document.getElementById('texto');

    mas.addEventListener('click', function () {
        texto.classList.add('custom-style');
    });

    menos.addEventListener('click', function () {
        texto.classList.remove('custom-style');
    });
});