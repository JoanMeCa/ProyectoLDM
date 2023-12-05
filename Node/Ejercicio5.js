function numal() {
    return Math.floor(Math.random() * 101);
}

function monitor(umbral) {
    setInterval(() => {
        const valorSensor = numal();

        console.log(`Valor del sensor: ${valorSensor}`);

        if (valorSensor > umbral) {
            console.log('¡Alerta! El valor del sensor ha superado el umbral.');
        }
    }, 1000); // Se repite cada 1 segundo
}
monitor(80) //Se establece el numero que no se tiene que superar aquí