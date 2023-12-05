const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el nombre del archivo: ', (nombreArchivo) => {
    const rutaArchivo = `./${nombreArchivo}`;

    fs.readFile(rutaArchivo, 'utf8', (error, contenido) => {
        if (error) {
            console.error(`Error al leer el archivo: ${error.message}`);
        } else {
            console.log(`Contenido del archivo ${nombreArchivo}:`);
            console.log(contenido);
        }
        rl.close();
    });
});