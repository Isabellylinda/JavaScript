function calcularRetornoInvestimento(capitalInicial, taxaJuros, tempoMeses) {
   
    let i = taxaJuros / 100;

    
    let montante = capitalInicial * Math.pow(1 + i, tempoMeses);

    montante = Math.round(montante * 100) / 100;

    return montante;
}


let capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
let taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
let tempoMeses = parseInt(prompt("Digite o tempo do investimento (em meses):"));

let retornoInvestimento = calcularRetornoInvestimento(capitalInicial, taxaJuros, tempoMeses);
console.log("O montante após", tempoMeses, "meses será de:", retornoInvestimento.toFixed(2));