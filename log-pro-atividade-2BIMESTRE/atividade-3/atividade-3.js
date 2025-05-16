//0. FAÇA OS EXERCÌCIOS ABAIXO DUAS VEZES.
const prompt = require('prompt-sync')({ sigint: true });

//1. Crie um array com 5 elementos da forma string.
let carros = ['uno', 'gol', 'prisma', 'fusca', 'golf'];
console.log(carros);
console.log('-'.repeat(90));
let times = ['flamengo', 'vasco', 'fluminense', 'palmeiras', 'cruzeiro'];
console.log(times);
console.log('='.repeat(90));
//2. Determine o quarto elemento desse array usando indexação.
console.log(`O quarto elemento é:"${carros[3]}".`);
console.log('-'.repeat(90));
console.log(`O quarto elemento é:"${times[3]}".`);
console.log('='.repeat(90));
//3. Determine o último elemento deste array.
console.log("O ultimo elemento é:", carros[carros.length - 1]);
console.log('-'.repeat(90));
console.log("O ultimo elemento é:", times[times.length - 1]);
console.log('='.repeat(90));
//4. Use for loops e liste os elementos do array de duas formas:

// Supondo que os arrays 'carros' e 'times' estejam definidos
console.log("OS CARROS LISTADOS:");
for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]);
}
console.log('-'.repeat(90));

console.log("OS TIMES LISTADOS:");
for (let i = 0; i < times.length; i++) {
    console.log(times[i]);
}
console.log('-'.repeat(90));
// 4.2. Usando for...of
console.log("OS CARROS LISTADOS:");
for (const carro of carros) {
    console.log(carro);
}
console.log('-'.repeat(90));

console.log("OS TIMES LISTADOS:");
for (const time of times) {
    console.log(time);
}
console.log('='.repeat(90));
//5. Ordene os elementos deste array em forma alfabética.
console.log("OS carros em ordem alfabética é:", carros.sort());
console.log('-'.repeat(90));

console.log("Os times em ordem alfabética é:", times.sort());
console.log('='.repeat(90));

//6. Ordene os elementos do array em forma alfabética reversa
console.log("Os carros em ordem alfabética ao contrario é:", carros.sort().reverse());
console.log('-'.repeat(90));

console.log("Os times em ordem alfabética ao contrario é:", times.sort().reverse());
console.log('='.repeat(90));

//7. Crie um array com elementos numéricos.
let numeros = [1, 4, 5, 65, 465, 2, 31, 54, 9, 33];
let numeros2 = [5, 89, 45, 38, 25, 22, 60, 45, 27, 54];
//7.1 ordene os elementos em ordem crescente
console.log("OS números em ordem crescente é:");
console.log(numeros.sort((a, b) => a - b));
console.log('-'.repeat(90));

console.log("Os numeros2 em ordem crescente é:");
console.log(numeros2.sort((a, b) => a - b));
console.log('='.repeat(90));
//7.2 ordene os elementos em ordem decrescente
console.log("Os números em rodem decrescente é:");
console.log(numeros.sort((b, a) => a - b));
console.log('-'.repeat(90));

console.log("OS números2 em ordem decrescente é:");
console.log(numeros2.sort((b, a) => a - b));
console.log('='.repeat(90));
//8. Crie um array com 3 elementos. 
console.log("Algumas frutas:");
let frutas = ['laranja', 'maçã', 'banana'];
console.log(frutas);
//8.1 adicione outros 4 elementos um por um usando push(.). Mostre a quantidade de elementos ao adicionar os elementos
frutas.push('uva');
console.log("A quantidade de frutas após adicionar UVA é:", frutas.length);

frutas.push('abacaxi');
console.log("A quantidade de frutas após adicionar ABACAXI é:", frutas.length);

frutas.push('melancia');
console.log("A quantidade de frutas após adicionar MELANCIA é:", frutas.length);

frutas.push('manga');
console.log("A quantidade de frutas após adicionar MANGA é:", frutas.length);
console.log('='.repeat(90));

console.log("Alguns animais:");
let animais = ['cachorro', 'gato', 'peixe'];
console.log(animais);

animais.push('coelho');
console.log("A quantidade de animais após adicionar COELHO é:", animais.length);

animais.push('tigre');
console.log("A quantidade de animais após adicionar TIGRE é:", animais.length);

animais.push('urso');
console.log("A quantidade de animais após adicionar URSO é:", animais.length);

animais.push('girafa');
console.log("A quantidade de animais após adicionar GIRAFA é:", animais.length);
console.log('='.repeat(90));
//8.2 remova o último elemento e mostre o elemento que foi eliminado.
let frutasRemovidas = frutas.pop();
console.log("Fruta removida:", frutasRemovidas);
console.log("A quantidade de frutas após a remoção da ultima fruta é:", frutasRemovidas.length);
console.log('-'. repeat(90));

let animaisRemovidos = animais.pop();
console.log("Animal removido:", animaisRemovidos);
console.log("A quantidade de animais após a remoção do ultimo animal é:", animaisRemovidos.length);
console.log('='. repeat(90));
console.log("FIM !");

