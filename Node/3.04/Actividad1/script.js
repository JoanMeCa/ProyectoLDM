function crearElemento() {
    var nuevoElemento = document.createElement('div');
    nuevoElemento.textContent = 'albion online es un mmorpg no lineal en el que escribes tu propia historia sin limitarte a seguir un camino prefijado, explora un amplio mundo abierto con cinco biomas unicos, todo cuanto hagas tendra su repercusíon en el mundo, con su economia orientada al jugador de albion los jugadores crean...';
    document.getElementById('contenedor').appendChild(nuevoElemento);
}

function eliminarElemento() {
    var contenedor = document.getElementById('contenedor');
    var elementos = contenedor.children;
    if (elementos.length > 0) {
        // Eliminar el último elemento
        contenedor.removeChild(elementos[elementos.length - 1]);
    } else {
        alert('No hay elementos para eliminar.');
    }
}