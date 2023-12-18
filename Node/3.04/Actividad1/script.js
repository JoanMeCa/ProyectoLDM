document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('boton');
    const boton1 = document.getElementById('boton1');
    const texto = document.getElementById('texto');

    const textog = `
    <h2 style="font-size: 50px;">Quién es Miyazaki?</h2>
    <p>Hidetaka Miyazaki, no confundir con Hayao Miyazaki, es el presidente de From Software, y un genio adelantado a su época.</p>
    <p>Su historia comenzaría con el lanzamiento y, a su pesar, fracaso de Demon's Souls en 2009, cuando el presidente de Playstation de aquel entonces dijo tras probar su juego "Nadie jamás jugará a este juego, es horrible".</p>
    <p>Y no solo el presidente compartía su opinión, en su lanzamiento, Miyazaki pudo ver como los que iban a probar la demo se iban antes siquiera de crear su personaje, un páramo ciertamente desolador para Miyazaki.</p>
    <p>Sin embargo, todo empezó a cambiar cuando los extranjeros se encontraron esta joya escondida, para bien... o para mal?</p>
    `;
    const texten = `
    <h2 style="font-size: 50px;">Who's Miyazaki?</h2>
    <p>Hidetaka Miyazaki, not to be confused with Hayao Miyazaki, is the president of From Software, and a genius ahead of his time.</p>
    <p>His story would begin with the release and, to his regret, failure of Demon's Souls in 2009, when the president of Playstation at that time said after trying his game, "No one will ever play this game, it's horrible."</p>
    <p>And not only did the president share his opinion, at its launch, Miyazaki could see how those who were going to try the demo left before even creating their character, a certainly devastating scenario for Miyazaki.</p>
    <p>However, everything began to change when foreigners discovered this hidden gem, for better... or for worse?</p>
    `;
    texto.innerHTML = textog;

    boton.addEventListener('click', function() {
        if (texto.innerHTML === textog) {
            texto.innerHTML = texten;
        } else {
            texto.innerHTML = textog;
        }
    });
    boton1.addEventListener('mouseover', function() {
        boton1.style.backgroundColor = 'red';
    });
    boton1.addEventListener('mouseout', function() {
        boton1.style.backgroundColor = '';
    });
});