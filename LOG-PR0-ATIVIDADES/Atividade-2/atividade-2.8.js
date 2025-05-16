//MATRÍCULA:25114290071
//NOME: RAFAEL CARVALHO DOS SANTOS
//ATIVIDADE: 2.8
    const anosOlimpicos = [];
    for (let i = 1896; i <= 2024; i += 4) {
        anosOlimpicos.push(i);
    }
    if (anosOlimpicos.includes(ano)) {
        alert("O ano " + ano + " é um ano de Jogos Olímpicos!");
    } else {
        alert("O ano " + ano + " NÃO é um ano de Jogos Olímpicos.");
    }

let ano = parseInt(prompt("Digite um ano entre 1890 e 2025:"));
if (ano >= 1890 && ano <= 2025) {
    verificarAnoOlimpicos(ano);
} else {
    alert("Por favor, digite um ano válido entre 1890 e 2025.");
}
