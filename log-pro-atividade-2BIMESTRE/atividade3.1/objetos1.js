let aluno1 = {
    matricula: 1125429,
    nome: "Rafael",
    DN: "7/05/2006",
    UF: "PI"
}
console.log(aluno1)
console.log(aluno1.matricula);
console.log(aluno1.nome);
console.log(aluno1.DN);
console.log(aluno1.UF);
for (const atributo1 in aluno1) {
    console.log(aluno1[atributo1])
};
console.log(Object.keys(aluno1));
console.log(Object.values(aluno1));
console.log(Object.entries(aluno1));
console.log('='.repeat(90));
//////////////////////////////////////////////////////
let carro = {
    carro1: "palio",
    carro2: "gol",
    carro3: "fusca",
    carro4: "s10"
}
console.log(carro.carro1);
console.log(carro.carro2);
console.log(carro.carro3);
console.log(carro.carro4);
console.log(carro);
for (const atributo2 in carro) {
    console.log(carro[atributo2])
};
console.log(Object.keys(carro));
console.log(Object.values(carro));
console.log(Object.entries(carro));
console.log('='.repeat(90));
/////////////////////////////////////////////////////
let animal = {
    animal1: "girafa",
    animal2: "cachorro",
    animal3: "gato",
    animal4: "rato"
}
console.log(animal.animal1);
console.log(animal.animal2);
console.log(animal.animal3);
console.log(animal.animal4);
for (const atributo3 in animal) {
    console.log(animal[atributo3])
};
console.log(animal);
console.log(Object.keys(animal));
console.log(Object.values(animal));
console.log(Object.entries(animal));
console.log('='.repeat(90));
////////////////////////////////////////////////////
let cor = {
    cor1: "Azul",
    cor2: "amarelo",
    cor3: "verde",
    cor4: "vermelho"
};
console.log(cor.cor1);
console.log(cor.cor2);
console.log(cor.cor3);
console.log(cor.cor4);
for (const atributo4 in cor) {
    console.log(cor[atributo4])
};
console.log(cor);
console.log(Object.keys(cor));
console.log(Object.values(cor));
console.log(Object.entries(cor));
console.log('='.repeat(90));
//////////////////////////////////////////////////
let cidade = {
    cidade1: "ceilândia",
    cidade2: "Taguatinga",
    cidade3: "Sobradinho",
    cidade4: "Recanto das Emas"
}
console.log(cidade.cidade1);
console.log(cidade.cidade2);
console.log(cidade.cidade3);
console.log(cidade.cidade4);
for (const atributo5 in cidade) {
    console.log(cidade[atributo5])
};
console.log(cidade);
console.log(Object.keys(cidade));
console.log(Object.values(cidade));
console.log(Object.entries(cidade));

