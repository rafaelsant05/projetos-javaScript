/*const prompt = require('prompt-sync')({sigint:true});
let vogais =['a','e','i','o','u'];
let car = prompt("Digite uma letra:").toLowerCase();
if(vogais.includes(car)){
console.log(`"${car}" é uma vogal!`);
}else{
    console.log(` "${car}" não é uma vogal, tente novamente:`);
}*/

const prompt =require('prompt-sync')({sigint:true});
let num = prompt("digite um número de 1 a 100 para descobrir se é impar ou par:").toLowerCase();
if(num%2===0){
    console.log("O número digitado é par!");
}else{
    console.log(" O número digitado é impar!!");
}

 