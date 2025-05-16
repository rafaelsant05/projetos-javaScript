//MATRÍCULA:25114290071
//NOME: RAFAEL CARVALHO DOS SANTOS
//ATIVIDADE: 2.2  
const prompt = require ('prompt-sync') ({sigint: true});
var media;
var n1 = parseFloat(prompt("Digite seu primeiro número: "));
var n2 = parseFloat(prompt("Digite seu segundo número: "));
var n3 = parseFloat(prompt("Digite seu terceiro número: "));
media = (n1 + n2 + n3)/3;
console.log (media);