function crearElemento() {
    var nuevoElemento = document.createElement('div');
    nuevoElemento.textContent = 'albion online es un mmorpg no lineal en el que escribes tu propia historia sin limitarte a seguir un camino prefijado, explora un amplio mundo abierto con cinco biomas unicos, todo cuanto hagas tendra su repercusíon en el mundo, con su economia orientada al jugador de albion los jugadores crean...';
    contenedor.appendChild(nuevoElemento);
}

function eliminarElemento() {
    contenedor.removeChild(contenedor.lastElementChild);
}