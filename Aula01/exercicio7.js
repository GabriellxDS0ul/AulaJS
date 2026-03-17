
document.write("<h1> Aula 01 - Exercício 7</h1>")
        var nota1 = Number(prompt("Digite a primeira nota:"));
        var nota2 = Number(prompt("Digite a segunda nota:"));
        var nota3 = Number(prompt("Digite a terceira nota:"));

        
        var media = (nota1 + nota2 + nota3) / 3;

        alert("A média aritmética é: " + media.toFixed(1));