document.write("<h1> Aula 01 - Exercício 9</h1>")
var principal = Number(prompt("Digite o valor inicial (Principal):"));
        var taxa = Number(prompt("Digite a taxa de juros (em porcentagem, ex: 5 para 5%):"));
        var tempo = Number(prompt("Digite o tempo (em anos):"));

    
        var taxaDecimal = taxa / 100;
        var montante = principal * (1 + (taxaDecimal * tempo))
        alert("O valor do montante final é: R$ " + montante.toFixed(2));
