//NOME:  RAFAEL CARVALHO DOS SANTOS
//MATRÍCULA:25114290071
//ATIVIDADE: exercício3

const prompt = require('prompt-sync')({ sigint: true });

var NInicial = 1;
var NFinal = 100;
var NumeroPremiado1 = 69;
var NumeroPremiado2 = 1;
var NumeroPremiado3 = 18;

for (let tentativas = 0; tentativas < 3; tentativas++) {
    var N = parseInt(prompt("Digite um número entre 1 e 100: "));

    if (N < NInicial || N > NFinal) {
        console.log(`Você digitou um número inválido, digite entre ${NInicial} e ${NFinal}`);
        continue;
    }

    if (N === NumeroPremiado1 || N === NumeroPremiado2 || N === NumeroPremiado3) {
        console.log("Você foi premiado, parabéns!");
        break;
    } else {
        console.log("Você não foi premiado. Tente novamente!");
    }

    if (tentativas === 2) {
        console.log("Você esgotou suas tentativas. Tente novamente na próxima vez!");
    }
}