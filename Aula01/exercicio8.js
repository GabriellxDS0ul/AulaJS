document.write("<h1> Aula 01 - Exercício 8</h1>")
        var peso = Number(prompt("Digite o seu peso (ex: 80):"));
        var altura = Number(prompt("Digite a sua altura (ex: 1.75):"));

        var imc = peso / (altura * altura);

        alert("Seu IMC é: " + imc.toFixed(2));