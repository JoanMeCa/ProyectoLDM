const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
rl.question("Buenos días, me podría dar su nombre? ", (nombre) => {console.log(`Oh, encantado de conocerle ${nombre}.`); rl.close() });