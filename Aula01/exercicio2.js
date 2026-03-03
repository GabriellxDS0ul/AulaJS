document.write("<h1> Aula 01 - Exercício 2</h1>")

var fah = prompt("Digite a temperatura em graus Fahrenheit:");
fah = parseFloat(fah);
var celsius = (fah - 32) * 5 / 9;

alert("Temperatura em Celsius: " + celsius.toFixed(2) + "°C");
