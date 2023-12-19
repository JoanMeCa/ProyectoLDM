document.addEventListener('DOMContentLoaded', function () {
    const mas = document.getElementById('mas');
    const texto = document.getElementById('texto');
    let estiloPersonalizado = false;

    mas.addEventListener('click', function () {
        const miyazakiPresence = Array.from(texto.querySelectorAll('p')).filter(parrafo =>
            parrafo.textContent.includes('Miyazaki') || parrafo.textContent.length > 200
        );

        miyazakiPresence.forEach(function(parrafo) {
            if (estiloPersonalizado) {
                parrafo.classList.remove('miyazaki');
            } else {
                parrafo.classList.add('miyazaki');
                parrafo.addEventListener('click', function() {
                    if (parrafo.classList.contains('miyazaki')) {
                        alert('Shrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.\nShrek is Love, Shrek is Life.');
                    }
                });
            }
        });

        estiloPersonalizado = !estiloPersonalizado;
    });
});