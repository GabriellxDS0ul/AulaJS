document.write("<h1> Aula 01 - Exercício 3</h1>")

var valor = prompt("Digite o valor da prestação em atraso:");
    var taxa = prompt("Digite a taxa de juros (%):");
    var tempo = prompt("Digite o número de dias em atraso:");

    valor = Number(valor);
    taxa = Number(taxa);
    tempo = Number(tempo);
    
 var valorParcela = valor + (valor * ((taxa * taxa) / 100) * tempo);

    document.write("O valor da parcela é: R$ " + valorParcela);