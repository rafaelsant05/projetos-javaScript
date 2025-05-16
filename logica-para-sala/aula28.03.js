/*for(i=0; i<=5; i+=3){
    console.log(i);
}
for(var i=0; i<=20; i+=5){
    console.log(`Número ${i}`);
}
console.log(`Número ${i} está fora do escorpo.`)*/
/*let numeroInicial =1;
let numeroFinal =100;
for(let i = numeroInicial; i <= numeroFinal; i=1+i){
    if(i %2 == 0 ){
        console.log(`Número ${i} é par`)*/
        /*let numeroInicial = 1;
        let numFinal = 10;
                
        for(let i = numeroInicial; i <= numFinal; i++) {
            if(i % 2 !== 0) {
                console.log(`Número ${i} é ímpar`);
            }
        }*/
        /*let inicio = 0;
        let fim = 2000;
        let contador = 0;
        
        for(let i = inicio; i <= fim; i++) {
            if(i %2 !== 0) {
                contador++;
            }
        }
        
        console.log(`Existem ${contador} números impares  entre ${inicio} e ${fim}`);*/



        const prompt = require('prompt-sync')({sigint: true});

        let anoCopa = parseInt(prompt("Digite um ano:"));
        if(anoCopa %4 == 2 && anoCopa !=1946 && anoCopa != 1942 && anoCopa >=1930){
            console.log(`O ano ${anoCopa} é um ano de Copa do Mundo`)
            
        }


