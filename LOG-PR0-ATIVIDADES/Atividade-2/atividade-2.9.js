//MATRÍCULA:25114290071
//NOME: RAFAEL CARVALHO DOS SANTOS
//ATIVIDADE: 2.9
  const pesoN1 = 3;
    const pesoN2 = 3;
    const pesoN3 = 4;
    const mediaFinal = (N1 * pesoN1 + N2 * pesoN2 + N3 * pesoN3) / (pesoN1 + pesoN2 + pesoN3);

    
    if (mediaFinal >= 5) {
        alert("Média final: " + mediaFinal.toFixed(2) + ". Você foi aprovado!");
    } else {
        alert("Média final: " + mediaFinal.toFixed(2) + ". Você foi reprovado.");
    }
let N1 = parseFloat(prompt("Digite a nota N1 (entre 0 e 10):"));
let N2 = parseFloat(prompt("Digite a nota N2 (entre 0 e 10):"));
let N3 = parseFloat(prompt("Digite a nota N3 (entre 0 e 10):"));
if ((N1 >= 0 && N1 <= 10) && (N2 >= 0 && N2 <= 10) && (N3 >= 0 && N3 <= 10)) {
    verificarAprovacao(N1, N2, N3);
} else {
    alert("Por favor, insira notas válidas entre 0 e 10.");
}
