//MATRÍCULA:25114290071
//NOME: RAFAEL CARVALHO DOS SANTOS
//ATIVIDADE: 2.5
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
    console.log("cor inválida!");

}