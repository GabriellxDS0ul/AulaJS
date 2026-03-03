document.write("<h1> Aula 01 - Exercício 1</h1>")

var numero = prompt("Digite um número qualquer:");

var quadrado = Number(numero) *Number(numero);
var cubo = Number(numero) * Number(numero) *Number(numero)

document.write("<p>O número digitado foi" + numero + "</p>");

document.write("<p style='color : red'>O quadrado do número é" + quadrado + "</p>");
document.write("<p style='color : blue'>O cubo do número é" + cubo + "</p>");
