const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("Introduzca la temperatura: ", (tempog) => {
    rl.question("Se trata de Celsius o Farenheit? ", (tipo) => {
        if (tipo === "Celsius") {
            const tempafter = (tempog * (9/5)) + 32
            console.log(`La temperatura introducida equivale a ${tempafter} grados Farenheit.`)
        }
        else if (tipo === "Farenheit") {
            const tempafter =  (tempog - 32)*(5/9)
            console.log(`La temperatura introducida equivale a ${tempafter} grados Celsius.`)
        }   
        else {
            console.log(`ERROR`)
        }
        rl.close()
    })
});