const prompt = require('prompt-sync')({sigint: true});

// Solicita dia e mês de nascimento
const dia = parseInt(prompt("Digite o dia do seu nascimento: "));
const mes = parseInt(prompt("Digite o mês do seu nascimento (1-12): "));

// Função para determinar o signo
function determinarSigno(dia, mes) {
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) {
        return "Áries";
    } else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
        return "Touro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        return "Gêmeos";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        return "Câncer";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        return "Leão";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        return "Virgem";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        return "Libra";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        return "Escorpião";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        return "Sagitário";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)) {
        return "Capricórnio";
    } else if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 18)) {
        return "Aquário";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        return "Peixes";
    } else {
        return "Data inválida";
    }
}

// Validação da data
if (mes >= 1 && mes <= 12) {
    const maxDias = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (dia >= 1 && dia <= maxDias[mes - 1]) {
        const signo = determinarSigno(dia, mes);
        console.log(`Seu signo é: ${signo}`);
    } else {
        console.log("Dia inválido para o mês informado.");
    }
} else {
    console.log("Mês inválido. Por favor, digite um número entre 1 e 12.");
} 