document.write("<h2>Entrada de Dados</h2>");

var numero1 = prompt("Digite o numero 1");
var numero2 = prompt("Digite o numero 2");

document.write("Numero 1 = " + numero1 + "<br>");
document.write("Numero 2 = " + numero2 + "<br>");

document.write("<h2>Operações Aritméticas</h2>");
var resultado;

resultado = Number(numero1) + Number(numero2);

resultado = numero1 + numero2;
document.write("A soma dos numeros é " + resultado + "<br>");
