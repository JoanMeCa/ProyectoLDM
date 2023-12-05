const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('1. Sumar');
console.log('2. Restar'); 
console.log('3. Multiplicar');
console.log('4. Dividir');

rl.question("Introduzca la operación que desea hacer: ", (tipo) => {
    if (tipo === "Sumar") {
        rl.question("Introduzca el primer número: ", (n1) => {
            rl.question("Introduzca el segundo número: ", (n2) => {
                const suma = parseFloat(n1) + parseFloat(n2);
                console.log(`El resultado de la suma entre ${n1} y ${n2} es ${suma}`);
                rl.close();
            });
        });
    } else if (tipo === "Restar") {
        rl.question("Introduzca el primer número: ", (n1) => {
            rl.question("Introduzca el segundo número: ", (n2) => {
                const resta = parseFloat(n1) - parseFloat(n2);
                console.log(`El resultado de la resta entre ${n1} y ${n2} es ${resta}`);
                rl.close();
            });
        });
    } else if (tipo === "Multiplicar") {
        rl.question("Introduzca el primer número: ", (n1) => {
            rl.question("Introduzca el segundo número: ", (n2) => {
                const mult = parseFloat(n1) * parseFloat(n2);
                console.log(`El resultado de la multiplicación entre ${n1} y ${n2} es ${mult}`);
                rl.close();
            });
        });
    } else if (tipo === "Dividir") {
        rl.question("Introduzca el primer número: ", (n1) => {
            rl.question("Introduzca el segundo número: ", (n2) => {
                const div = parseFloat(n1) / parseFloat(n2);
                console.log(`El resultado de la división entre ${n1} y ${n2} es ${div}`);
                rl.close();
            });
        });
    } else {
        console.log("ERROR");
        rl.close();
    }
});