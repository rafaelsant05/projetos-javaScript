//Nome: Rafael Carvalho dos Santos.
//Matrícula : 25114290071

const prompt = require('prompt-sync')({ sigint: true });

//1. Crie um array com 5 elementos da forma string.

let cor = ['azul', 'vermelho', 'amarelo', 'verde'];
console.log(cor);

console.log('-'.repeat(90));

//2. Determine o quarto elemento desse array usando indexação.
console.log("Quarto Elelmento:", cor[3]);

console.log('-'.repeat(90));

//3. Determine o último elemento deste array.

console.log("O ultimo elemento é:", cor[cor.length - 1]);

console.log('-'.repeat(90));

//4. Use for loops e liste os elementos do array de duas formas.  
//4.1. usando for loop sobre os índices

console.log("As cores disponiveis são:")
for (let i = 0; i < cor.length; i++) {
  console.log(cor[i]);
}

console.log('-'.repeat(90));

//4.2. usando for...of

console.log("As cores disponiveis são:")
for (const cores of cor) {
  console.log(cores);
}

console.log('-'.repeat(90));

//5. Ordene os elementos deste array em forma alfabética.

console.log("As cores em ordem alfabetica é:", cor.sort());

console.log('-'.repeat(90));

//6. Ordene os elementos do array em forma alfabética reversa.

console.log("A ordem alfabetica das cores ao contrario é:", cor.sort().reverse());

console.log('-'.repeat(90));

//7. Crie um array com elementos numéricos. 

let numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

//7.1 ordene os elementos em ordem crescente

console.log(numeros.sort((a, b) => a - b));

console.log('-'.repeat(90));

//7.2 ordene os elementos em ordem decrescente

console.log(numeros.sort((a, b) => a - b).reverse());

console.log('-'.repeat(90));

//8. Crie um array com 3 elementos.

let elementos = ['céu', 'terra', 'fogo'];
console.log(elementos);
//8.1 adicione outros 4 elementos um por um usando push(.). Mostre a quantidade de elementos ao adicionar os elementos

elementos.push('sol');
console.log("A quantidade de elementos após inserir SOL:", elementos.length);
console.log('-'.repeat(30));

elementos.push('Estrela');
console.log("A quantidade de elementos após inserir ESTRELA:", elementos.length);
console.log('-'.repeat(30));

elementos.push('Lua');
console.log("A quantidade de elementos após inserir LUA:", elementos.length);
console.log('-'.repeat(30));

elementos.push('Água');
console.log("A quantidade de elementos após inserir ÁGUA:", elementos.length);
console.log('-'.repeat(30));

//8.2 remova o último elemento e mostre o elemento que foi eliminado.

let elementosRemovidos = elementos.pop();
console.log("Elemento removido:", elementosRemovidos);


console.log("A quantidade de elementos após remover o ultímo elemnto é:", elementos.length);

console.log('-'.repeat(90));

//outra froma de ordenar os números em crescente e decrescente:

let numeross = [1, 4, 5, 7, 84, 34, 76, 2, 46];

console.log(numeross.sort((a, b) => a - b)); //Crescente
console.log('-'.repeat(90));

console.log(numeross.sort((a, b) => b - a)); //Decrescente
console.log('-'.repeat(90));

//indicação de elementos:

//sexto elemento dos números;
console.log("O sexto elemento dos números é:");

console.log(numeross[5]);
console.log('-'.repeat(90));

//Primeiro elemento dos números;
console.log("O primeiro elemento dos números é:");

console.log(numeross[0]);
console.log('-'.repeat(90));

//Penúltimo elemento dos números;
console.log("O penultimo  elemento dos números é:");

console.log(numeross[numeross.length - 2]);
console.log('-'.repeat(90));

//Declarando um elemento usando indexação:

let cidade = ['Ceilândia', 'Taguatinga', 'Guará', 'Sobradinho'];
console.log(cidade);
console.log('-'.repeat(90));

console.log(`o ìndice de Taguatinga é: ${cidade.indexOf("Taguatinga")}`);
console.log('-'.repeat(90));

console.log(`o ìndice do Guará é: ${cidade.indexOf("Guará")}`);
console.log('-'.repeat(90));

console.log(`o ìndice de Ceilândia é: ${cidade.indexOf("Ceilândia")}`);
console.log('-'.repeat(90));

console.log(`o ìndice de Sobradinho é: ${cidade.indexOf("Sobradinho")}`);
console.log('-'.repeat(90));

