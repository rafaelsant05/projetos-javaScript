//NOME:  RAFAEL CARVALHO DOS SANTOS
//MATRÍCULA:25114290071
//ATIVIDADE: exercício4
const prompt = require ('prompt-sync') ({sigint: true});
let cor = prompt("Digite uma cor entre;verde,amarelo,vermelho:").toLowerCase();
switch(cor){
    case"verde":
    console.log ("Siga!");
    break;
    case"amarelo":
    console.log("Atenção!");
    break;
    case("vermelho"):
console.log("Pare!");
break
default:
}
