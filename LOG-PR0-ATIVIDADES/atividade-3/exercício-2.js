//NOME:  RAFAEL CARVALHO DOS SANTOS
//MATRÍCULA:25114290071
//ATIVIDADE: exercício2

const prompt = require('prompt-sync')({ sigint: true });

let anoInicial = 2024;
let anoFinal = 2500;
let ano = parseInt(prompt("Digite um ano: "));

if (ano >= anoInicial && ano <= anoFinal) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log(`O ano ${ano} é bissexto`);
    } else {
        console.log(`O ano ${ano} não é bissexto`);
    }
} else {
    console.log(`Por favor, digite um ano entre ${anoInicial} e ${anoFinal}.`);
}
