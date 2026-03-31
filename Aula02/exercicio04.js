// Recebendo os dados via prompt
let base = parseFloat(prompt("Digite o valor da base do triângulo:"));
let altura = parseFloat(prompt("Digite o valor da altura do triângulo:"));
let area = (base * altura) / 2;
document.getElementById("resultado").innerHTML = 
    "Área do triângulo: " + area.toFixed(2);