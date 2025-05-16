//MATRÍCULA:25114290071
//NOME: RAFAEL CARVALHO DOS SANTOS
//ATIVIDADE: 2.10
let amigo1 = { nome: "Rafael", idade: 25 };
let amigo2 = { nome: "Rickson", idade: 30 };
let amigo3 = { nome: "Lucas", idade: 28 };

let maisVelho = amigo1;

if (amigo2.idade > maisVelho.idade) {
    maisVelho = amigo2;
}

if (amigo3.idade > maisVelho.idade) {
    maisVelho = amigo3;
}

alert("O amigo mais velho é " + maisVelho.nome + ", com " + maisVelho.idade + " anos.");
