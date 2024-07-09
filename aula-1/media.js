const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

rl.question("Informe n1: ", function(string) {
    const n1 = parseInt(string);
    rl.question("Informe n2: ", function(string) {
        const n2 = parseInt(string);
        rl.question("Informe n3: ", function(string) {
            const n3 = parseInt(string);
            const resFinal = media(n1, n2, n3);
            console.log("Sua média é: " + resFinal);
            rl.close();
        });
    });
});
