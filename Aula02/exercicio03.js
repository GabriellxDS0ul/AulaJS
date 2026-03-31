
let valor = parseFloat(prompt("Digite o valor da prestação em atraso:"));
let taxa = parseFloat(prompt("Digite a taxa de juros (%):"));
let tempo = parseInt(prompt("Digite o tempo de atraso (dias):"));
let valorParcela = valor + (valor * ((taxa * taxa) / 100) * tempo);
document.getElementById("resultado").innerHTML = 
    "Valor da parcela: R$ " + valorParcela.toFixed(2);