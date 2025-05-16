//NOME:  RAFAEL CARVALHO DOS SANTOS
//MATRÍCULA:25114290071
//ATIVIDADE: exercício1

const prompt = require('prompt-sync')({ sigint: true }); 

var hora = parseFloat(prompt("Digite a hora:"));
var Km = parseFloat(prompt("Digite a distancia:"));

var CustoDistancia;
var custoFixo;
var ValorTotal;

if (hora >= 0 && hora <= 6) {
    custoFixo = 5.30;
    CustoDistancia = 4.40;
    ValorTotal = custoFixo + CustoDistancia * Km;
    console.log(`O valor total é ${ValorTotal}`);
} else if (hora > 6 && hora <= 18) {
    custoFixo = 3.30;
    CustoDistancia = 3.80;
    ValorTotal = custoFixo + CustoDistancia * Km;
    console.log(`O valor total é ${ValorTotal}`);
} else if (hora > 18 && hora < 24) {
    custoFixo = 4.30;
    CustoDistancia = 4.10;
    ValorTotal = custoFixo + CustoDistancia * Km;
    console.log(`O valor total é ${ValorTotal}`);
} else {
    console.log("A hora ou/e distancia estão errados");
}

