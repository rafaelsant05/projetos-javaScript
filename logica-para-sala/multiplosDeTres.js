let inicio = 0;
let fim = 2000;
let contador = 0;

for(let i = inicio; i <= fim; i++) {
    if(i % 3 === 0) {
        contador++;
    }
}

console.log(`Existem ${contador} números múltiplos de 3 entre ${inicio} e ${fim}`); 