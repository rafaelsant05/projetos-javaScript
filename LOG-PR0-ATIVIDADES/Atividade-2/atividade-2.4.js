//MATRÍCULA:25114290071
//NOME: RAFAEL CARVALHO DOS SANTOS
//ATIVIDADE: 2.4
const prompt = require ('prompt-sync') ({sigint: true});
var n1 = parseInt(prompt("Digite um número:"));
console.log(n1);
if (n1 % 2 === 0) { 
    console.log ("O número é par!");
} else { 
    console.log ("O número é impar!");
}