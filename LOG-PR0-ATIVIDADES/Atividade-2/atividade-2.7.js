//MATRÍCULA:25114290071
//NOME: RAFAEL CARVALHO DOS SANTOS
//ATIVIDADE: 2.7
    const anosCopa = [1970, 1974, 1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022];
    if (anosCopa.includes(ano)) {
        alert("O ano " + ano + " é um ano de Copa do Mundo!");
    } else {
        alert("O ano " + ano + " NÃO é um ano de Copa do Mundo.");
    }

let ano = parseInt(prompt("Digite um ano entre 1970 e 2025:"));

if (ano >= 1970 && ano <= 2025) {
    verificarAnoCopa(ano);
} else {
    alert("Por favor, digite um ano válido entre 1970 e 2025.");
}
