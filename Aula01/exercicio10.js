document.write("<h1> Aula 01 - Exercício 10</h1>")
        var valorHora = Number(prompt("Digite o valor da sua hora (R$):"));
        var qtdHorasDia = Number(prompt("Digite a quantidade de horas trabalhadas por dia:"));
        var salario = valorHora * qtdHorasDia * 30;
        alert("O valor do salário ao final do mês é: R$ " + salario.toFixed(2));
    