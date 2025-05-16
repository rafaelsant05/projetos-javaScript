
//CÓDIGO PARA LER VOGAL

/*const prompt = require('prompt-sync')({sigint: true});
let vogais = ['a', 'e', 'i', 'o', 'u'];
let car = prompt("Digite uma letra:").toLowerCase();

if (vogais.includes(car)) {
    console.log(`${car} é uma vogal!`);
} else {
    console.log(`${car} não é uma vogal!`);
}*/

// ATIVIDADE 1.0
/*const prompt = require('prompt-sync')({sigint: true});
let inicio = prompt("Ano inicial:");
let Final = prompt("Ano Final:");
let copas =[];
for(let ano =1930; ano <= Final; ano +=4){
    if (ano >=inicio && ano!== 1942 && ano!== 1946){
        copas.push(ano);
    }
}
console.log(copas);*/


//DESCOBIR O ANO DE CADA COPA!
//ATIVIDADE 1.1
let anoInicial = 1930;
let anoFinal = 2025;
let copas = [];
for (let ano = anoInicial; ano <= anoFinal; ano += 4) {
    if(ano >= anoInicial && ano!==1942 && ano!==1946){
    copas.push(ano);
    }
}
console.log(" O ano da primeira copa do mundo: " + copas[0]);

console.log(" O ano da quarta copa do mundo: " + copas[3]);

console.log(" O ano da décima copa do mundo: " + copas[9]);

console.log(" O ano da última copa do mundo: " + copas[copas.length - 1]);

//ATIVIDADE 2.0
/*const prompt = require('prompt-sync')({sigint: true});
let inicio = prompt("Ano inicial:");
let Final = prompt("Ano Final:");
let olimpiadas =[];
for(let ano =1896; ano <= Final; ano +=4)
    if (ano >=inicio && ano!== 1916 && ano!== 1940 && ano!== 1944){
        olimpiadas.push(ano);
}

console.log(olimpiadas);*/

