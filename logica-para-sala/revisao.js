let numPremiado1 = 27;
let numPremiado2 = 28;
let numPremiado3 = 7;
let tentativas = 3;
let tentativasRestantes = 3;
const prompt = require('prompt-sync')({ sigint:true});
for (let i = 0; i < tentativas; i++) {
    var num = parseInt(prompt(`Faça a sua tentativa ${i+1}: `));
    if (num == numPremiado1 || num == numPremiado2 || num == numPremiado3) {
        console.log(`Número ${num} é premiado. Você ganhou!`);
        break;
    } else {
        tentativasRestantes--
        console.log(`Você errou, você tem ${tentativasRestantes} tentativas(s).`)
    }
} if (num !== numPremiado1 && num !== numPremiado2 && num !== numPremiado3){
console.log ("você perdeu!")
}