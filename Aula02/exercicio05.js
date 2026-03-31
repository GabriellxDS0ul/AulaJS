
let lado = parseFloat(prompt("Digite o valor do lado do quadrado:"));
let area = lado * lado;
document.getElementById("resultado").innerHTML = 
    "Área do quadrado: " + area.toFixed(2);