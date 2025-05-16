//NOME:  RAFAEL CARVALHO DOS SANTOS
//MATRÍCULA:25114290071
//ATIVIDADE: exercício5

const prompt = require('prompt-sync')({ sigint: true });

const dia = parseInt(prompt("Digite o dia do seu nascimento: "));
const mes = parseInt(prompt("Digite o mês do seu nascimento (1-12): "));


if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) {
    console.log("Áries!");
} else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
    console.log("Touro!");
} else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
    console.log("Gêmeos!");
} else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
    console.log("Câncer!");
} else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
    console.log("Leão!");
} else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
    console.log("Virgem!");
} else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
    console.log("Libra!");
} else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
    console.log("Escorpião!");
} else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
    console.log("Sagitário!");
} else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)) {
    console.log("Capricórnio!");
} else if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 18)) {
    console.log("Aquário!");
} else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
    console.log("Peixes!");
} else {
    console.log("Data inválida");
}