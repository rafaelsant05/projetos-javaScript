//MATRÍCULA:25114290071
//NOME: RAFAEL CARVALHO DOS SANTOS
//ATIVIDADE: 2.6
const prompt = require('prompt-sync')({ sigint: true });
var numeroreal = parseFloat(prompt("Digite um número positivo:"));
if (numeroreal <= 0) {
    console.log("Por favor, digite um número real positivo:");
} else {
    var numeroInteiro = parseInt(numeroreal);
    if (numeroInteiro % 3 === 0) {
        console.log("O número " + numeroInteiro + " é multiplo de 3!");
    } else {
        console.log("O número " + numeroInteiro + " não é multiplo de 3!");
    }
}